"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const CustomException_1 = require("../../Base/Utils/CustomException");
const library_1 = require("@prisma/client/runtime/library");
let OrderService = class OrderService {
    constructor(orderRepository, couponRepository, customerRepository, orderDetailRepository) {
        this.orderRepository = orderRepository;
        this.couponRepository = couponRepository;
        this.customerRepository = customerRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.orderRepository = orderRepository;
        this.couponRepository = couponRepository;
        this.customerRepository = customerRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    async createOrder(request) {
        try {
            let totalPrice = 0;
            let orderDetailResponse = [];
            const [order, cusInfo] = await Promise.all([
                this.orderRepository.createOrder(request),
                this.customerRepository.createCustomerInfo(request.customerInfo)
            ]);
            order.customerInfoKey = cusInfo.customerInfoKey;
            const orderDetailPromise = request.orderDetails.map(async (od) => {
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
            order.totalPrice = new library_1.Decimal(totalPrice);
            await this.orderRepository.updateOrder(order);
            const response = {
                ...order,
                customerInfor: cusInfo,
                orderDetails: orderDetailResponse,
                couponResponse: request.couponCode ? { code: request.couponCode, applied: !!totalPrice } : undefined
            };
            return response;
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
        }
    }
    async getOneOrder(orderKey) {
        try {
            const order = await this.orderRepository.getOneOrder(orderKey);
            if (!order) {
                throw new CustomException_1.DataNotFoundException("Không tìm thấy dữ liệu !");
            }
            const response = {
                ...order
            };
            return response;
        }
        catch (e) {
            if (e instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException("Không tìm thấy dữ liệu !");
            }
        }
    }
    async getAllOrder() {
        try {
            const getAllOrder = await this.orderRepository.getAllOrder();
            if (!getAllOrder) {
                return null;
            }
            const response = getAllOrder.map(order => {
                return {
                    ...order,
                    customerInfor: null,
                    orderDetails: [],
                    couponResponse: null,
                };
            });
            return response;
        }
        catch (e) {
            if (e instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException("Không tìm thấy dữ liệu !");
            }
            throw new common_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async deleteOrder(orderKey) {
        try {
            await this.orderRepository.deleteOrder(orderKey);
        }
        catch (e) {
            if (e instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(e.message);
            }
            throw new common_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("IOrderRepository")),
    __param(1, (0, common_1.Inject)("ICouponRepository")),
    __param(2, (0, common_1.Inject)("ICustomerInfoRepository")),
    __param(3, (0, common_1.Inject)("IOrderDetailRepository")),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], OrderService);
//# sourceMappingURL=OrderService.js.map