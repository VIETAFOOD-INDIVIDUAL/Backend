import { Inject, Injectable, InternalServerErrorException, Module } from "@nestjs/common";
import { IOrderService } from "../IService/IOrderService";
import { IOrderRepository } from "src/Repositories/IRepository/IOrderRepository";
import { OrderResponse } from "src/Dtos/Orders/Response/OrderResponse";
import { DataNotFoundException } from "src/Base/Utils/CustomException";
import { ICustomerInfoRepository } from "src/Repositories/IRepository/ICustomerInfoRepository";
import { ICouponRepository } from "src/Repositories/IRepository/ICouponRepository";
import { IOrderDetailRepository } from "src/Repositories/IRepository/IOrderDetailRepository";
import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";
import { Decimal } from "@prisma/client/runtime/library";
import { OrderDetailResponse } from "src/Dtos/OrderDetail/Response/OrderDetailResponse";

@Injectable()
export class OrderService implements IOrderService {
    constructor(
        @Inject("IOrderRepository")
        readonly orderRepository: IOrderRepository,
        @Inject("ICouponRepository")
        private readonly couponRepository: ICouponRepository,
        @Inject("ICustomerInfoRepository")
        private readonly customerRepository: ICustomerInfoRepository,
        @Inject("IOrderDetailRepository")
        private readonly orderDetailRepository: IOrderDetailRepository,
    ) {
        this.orderRepository = orderRepository;
        this.couponRepository = couponRepository;
        this.customerRepository = customerRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    async createOrder(request: OrderRequest): Promise<OrderResponse> {
        try {
            let totalPrice: number = 0;
            let orderDetailResponse: OrderDetailResponse[] = [];

            const [order, cusInfo] = await Promise.all([
                this.orderRepository.createOrder(request),
                this.customerRepository.createCustomerInfo(request.customerInfo)
            ]);
            order.customerInfoKey = cusInfo.customerInfoKey;

            const orderDetailPromise = request.orderDetails.map(async od => {
                const orderDetail = await this.orderDetailRepository.createOrderDetail(od, order.orderKey);
                totalPrice += orderDetail.actualPrice * orderDetail.quantity;
                orderDetailResponse.push(orderDetail);
            });
            await Promise.all(orderDetailPromise);

            if (request.couponCode) {
                const coupon = await this.couponRepository.getOneCouponByCode(request.couponCode);
                if (coupon) {
                    totalPrice = totalPrice - (coupon.discountPercentage / 100 * totalPrice);
                }
            }
            order.totalPrice = new Decimal(totalPrice);
            await this.orderRepository.updateOrder(order);
            
            const response: OrderResponse = {
                ...order,
                customerInfor: cusInfo,
                orderDetails: orderDetailResponse,
                couponResponse: request.couponCode ? { code: request.couponCode, applied: !!totalPrice } : undefined
            };
            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

    async getOneOrder(orderKey: string): Promise<OrderResponse> {
        try {
            const order = await this.orderRepository.getOneOrder(orderKey);
            if (!order) {
                throw new DataNotFoundException("Không tìm thấy dữ liệu !");
            }
            const response = {
                ...order
            } as OrderResponse;
            return response;
        } catch (e) {
            if (e instanceof DataNotFoundException) {
                throw new DataNotFoundException("Không tìm thấy dữ liệu !");
            }
        }
    }
    async getAllOrder(): Promise<OrderResponse[]> {
        try {
            const getAllOrder = await this.orderRepository.getAllOrder();
            if (!getAllOrder) {
                return null;
            }
            const response: OrderResponse[] = getAllOrder.map(order => {
                return {
                    ...order,
                    customerInfor: null,
                    orderDetails: [],
                    couponResponse: null,
                } as OrderResponse;
            })
            return response;
        } catch (e) {
            if (e instanceof DataNotFoundException) {
                throw new DataNotFoundException("Không tìm thấy dữ liệu !");
            }
            throw new InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async deleteOrder(orderKey: string): Promise<void> {
        try {
            await this.orderRepository.deleteOrder(orderKey);
        } catch (e) {
            if (e instanceof DataNotFoundException) {
                throw new DataNotFoundException(e.message);
            }
            throw new InternalServerErrorException("Lỗi hệ thống !");
        }
    }
}