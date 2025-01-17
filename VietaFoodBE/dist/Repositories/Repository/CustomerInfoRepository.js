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
exports.CustomerInfoRepository = void 0;
const client_1 = require("@prisma/client");
const CustomException_1 = require("../../Base/Utils/CustomException");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
let CustomerInfoRepository = class CustomerInfoRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getAllCustomerInfo() {
        try {
            const customerInfos = await this.prisma.customerInformation.findMany();
            return customerInfos;
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async getOneCustomerInfo(customerKey) {
        try {
            const customerInfo = await this.prisma.customerInformation.findFirst({ where: { customerInfoKey: customerKey } });
            return customerInfo;
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async deleteCustomerInfo(customerKey) {
        try {
            const customerInfo = await this.prisma.customerInformation.findFirst({ where: { customerInfoKey: customerKey } });
            if (!customerInfo) {
                throw new CustomException_1.InternalServerErrorException("Không tìm thấy thông tin khách hàng !");
            }
            await this.prisma.customerInformation.delete({ where: { customerInfoKey: customerKey } });
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
    async createCustomerInfo(request) {
        try {
            const result = await this.prisma.customerInformation.create({ data: {
                    ...request,
                    customerInfoKey: `CUS_${(0, uuid_1.v4)()}`,
                } });
            return result;
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException("Lỗi hệ thống !");
        }
    }
};
exports.CustomerInfoRepository = CustomerInfoRepository;
exports.CustomerInfoRepository = CustomerInfoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CustomerInfoRepository);
//# sourceMappingURL=CustomerInfoRepository.js.map