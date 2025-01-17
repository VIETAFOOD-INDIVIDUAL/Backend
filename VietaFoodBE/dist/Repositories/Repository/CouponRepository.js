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
exports.CouponRepository = void 0;
const client_1 = require("@prisma/client");
const CustomException_1 = require("../../Base/Utils/CustomException");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
let CouponRepository = class CouponRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
        this.prisma = new client_1.PrismaClient();
    }
    async getAllCoupon() {
        try {
            return await this.prisma.coupon.findMany();
        }
        catch (error) {
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async getOneCouponByKey(couponKey) {
        try {
            return await this.prisma.coupon.findFirst({
                where: {
                    couponKey: couponKey
                }
            });
        }
        catch (error) {
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async getOneCouponByCode(couponCode) {
        try {
            return await this.prisma.coupon.findFirst({
                where: {
                    couponCode: couponCode,
                    status: 1
                }
            });
        }
        catch (error) {
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async createCoupon(request) {
        try {
            const isExistCode = await this.getOneCouponByCode(request.couponCode);
            if (isExistCode !== null) {
                throw new CustomException_1.InvalidDataException("Ma giam gia da ton tai !");
            }
            const result = await this.prisma.coupon.create({
                data: {
                    ...request,
                    createdDate: new Date(),
                    createdBy: "Admin",
                    status: 1,
                    couponKey: `CP_${(0, uuid_1.v4)()}`
                }
            });
            return result;
        }
        catch (error) {
            if (error instanceof CustomException_1.InvalidDataException) {
                throw new CustomException_1.InvalidDataException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async useCoupon(couponCode) {
        try {
            const isExist = await this.getOneCouponByCode(couponCode);
            if (isExist === null) {
                throw new CustomException_1.InvalidDataException("Khong tim thay ma giam gia !");
            }
            isExist.numOfUses = isExist.numOfUses - 1;
            if (isExist.numOfUses === 0) {
                isExist.status = 0;
            }
            const result = await this.prisma.coupon.update({
                where: {
                    couponCode: couponCode
                },
                data: {
                    ...isExist
                }
            });
            return result;
        }
        catch (error) {
            if (error instanceof CustomException_1.InvalidDataException) {
                throw new CustomException_1.InvalidDataException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async updateCoupon(couponKey, request) {
        try {
            const isExist = await this.getOneCouponByKey(couponKey);
            if (isExist === null) {
                throw new CustomException_1.InvalidDataException("Khong tim thay ma giam gia !");
            }
            const result = await this.prisma.coupon.update({
                where: {
                    couponKey: couponKey
                },
                data: {
                    ...request
                }
            });
            return result;
        }
        catch (error) {
            if (error instanceof CustomException_1.InvalidDataException) {
                throw new CustomException_1.InvalidDataException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
};
exports.CouponRepository = CouponRepository;
exports.CouponRepository = CouponRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CouponRepository);
//# sourceMappingURL=CouponRepository.js.map