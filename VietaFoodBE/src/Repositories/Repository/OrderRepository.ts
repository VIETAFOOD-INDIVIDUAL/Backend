import { Order, PrismaClient } from "@prisma/client";
import { IOrderRepository } from "../IRepository/IOrderRepository";
import { DataNotFoundException, InternalServerErrorException } from "src/Base/Utils/CustomException"
import { Injectable } from "@nestjs/common";
import { OrderStatusEnum } from "src/Base/Enum/OrderStatusEnum";
import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest"
import { v4 as uuidv4 } from 'uuid';
import { Decimal } from "@prisma/client/runtime/library";

@Injectable()
export class OrderRepository implements IOrderRepository {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async updateOrder(order: Order): Promise<void> {
        try {
            await this.prisma.order.update({
                where: {
                    orderKey: order.orderKey
                },
                data: {
                    ...order
                }
            });
        }catch(e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }
    async createOrder(request: OrderRequest): Promise<Order> {
        try {
            const { orderDetails, customerInfo, couponCode, ...order } = request;
            const result = this.prisma.order.create({
                data: {
                    ...order,
                    orderKey: `O_${uuidv4()}`,
                    status: OrderStatusEnum.Unpaid,
                    createdAt: new Date(),
                    totalPrice: new Decimal(request.totalPrice)
                }
            });
            return result;
        } catch (e) {
            throw new InternalServerErrorException("Lỗi hệ thống !");
        }
    }

    async getAllOrder(): Promise<Order[]> {
        try {
            const orders = await this.prisma.order.findMany();
            return orders;
        } catch (e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }

    async getOneOrder(orderKey: string): Promise<Order> {
        try {
            const order = await this.prisma.order.findFirst({
                where: {
                    orderKey: orderKey,
                    status: {
                        not: OrderStatusEnum.Deleted
                    }
                }
            });
            return order;
        } catch (e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }

    async deleteOrder(orderKey: string): Promise<void> {
        try {
            const order = await this.prisma.order.findFirst({
                where: {
                    orderKey: orderKey,
                    status: {
                        not: OrderStatusEnum.Deleted
                    }
                }
            });
            if (!order) {
                throw new InternalServerErrorException("Không tìm thấy đơn hàng !");
            }

            await this.prisma.order.update({
                where: {
                    orderKey: orderKey
                },
                data: {
                    status: OrderStatusEnum.Deleted
                }
            });
        } catch (e) {
            if (e instanceof DataNotFoundException) {
                throw new DataNotFoundException(e.message);
            }
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }
}