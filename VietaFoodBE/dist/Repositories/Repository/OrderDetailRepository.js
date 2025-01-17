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
exports.OrderDetailRepository = void 0;
const client_1 = require("@prisma/client");
const CustomException_1 = require("../../Base/Utils/CustomException");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
let OrderDetailRepository = class OrderDetailRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async updateOrder(order) {
        try {
            await this.prisma.order.update({
                where: {
                    orderKey: order.orderKey
                },
                data: order
            });
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async createOrderDetail(request, orderKey) {
        try {
            const result = await this.prisma.orderDetail.create({
                data: {
                    orderDetailKey: `OD_${(0, uuid_1.v4)()}`,
                    ...request,
                    orderKey: orderKey
                }
            });
            return result;
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
};
exports.OrderDetailRepository = OrderDetailRepository;
exports.OrderDetailRepository = OrderDetailRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OrderDetailRepository);
//# sourceMappingURL=OrderDetailRepository.js.map