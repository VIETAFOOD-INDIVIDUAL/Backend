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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const client_1 = require("@prisma/client");
const CustomException_1 = require("../../Base/Utils/CustomException");
const common_1 = require("@nestjs/common");
const OrderStatusEnum_1 = require("../../Base/Enum/OrderStatusEnum");
const uuid_1 = require("uuid");
const library_1 = require("@prisma/client/runtime/library");
let OrderRepository = class OrderRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async updateOrder(order) {
        try {
            await this.prisma.order.update({
                where: {
                    orderKey: order.orderKey
                },
                data: {
                    ...order
                }
            });
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async createOrder(request) {
        try {
            const { orderDetails, customerInfo, couponCode, ...order } = request;
            const result = this.prisma.order.create({
                data: {
                    ...order,
                    orderKey: `O_${(0, uuid_1.v4)()}`,
                    status: OrderStatusEnum_1.OrderStatusEnum.Unpaid,
                    createdAt: new Date(),
                    totalPrice: new library_1.Decimal(request.totalPrice)
                }
            });
            return result;
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async getAllOrder() {
        try {
            const orders = await this.prisma.order.findMany();
            return orders;
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async getOneOrder(orderKey) {
        try {
            const order = await this.prisma.order.findFirst({
                where: {
                    orderKey: orderKey,
                    status: {
                        not: OrderStatusEnum_1.OrderStatusEnum.Deleted
                    }
                }
            });
            return order;
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async deleteOrder(orderKey) {
        try {
            const order = await this.prisma.order.findFirst({
                where: {
                    orderKey: orderKey,
                    status: {
                        not: OrderStatusEnum_1.OrderStatusEnum.Deleted
                    }
                }
            });
            if (!order) {
                throw new CustomException_1.InternalServerErrorException("Không tìm thấy đơn hàng !");
            }
            await this.prisma.order.update({
                where: {
                    orderKey: orderKey
                },
                data: {
                    status: OrderStatusEnum_1.OrderStatusEnum.Deleted
                }
            });
        }
        catch (e) {
            if (e instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(e.message);
            }
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OrderRepository);
//# sourceMappingURL=OrderRepository.js.map