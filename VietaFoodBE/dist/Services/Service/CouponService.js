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
exports.CouponService = void 0;
const common_1 = require("@nestjs/common");
const CustomException_1 = require("../../Base/Utils/CustomException");
let CouponService = class CouponService {
    constructor(couponRepository) {
        this.couponRepository = couponRepository;
        this.couponRepository = couponRepository;
    }
    async getAllCoupon() {
        try {
            const getAllCoupon = await this.couponRepository.getAllCoupon();
            if (!getAllCoupon) {
                throw new CustomException_1.DataNotFoundException("Khong tim thay ma giam gia nao !");
            }
            const response = [...getAllCoupon];
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async updateCoupon(couponKey, request) {
        try {
            const result = await this.couponRepository.updateCoupon(couponKey, request);
            const response = {
                ...result
            };
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async useCoupon(couponCode) {
        try {
            const getOne = await this.couponRepository.useCoupon(couponCode);
            const response = {
                ...getOne
            };
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async createCoupon(request) {
        try {
            const result = await this.couponRepository.createCoupon(request);
            const response = {
                ...result
            };
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async getOneCouponByCode(couponCode) {
        try {
            const getOne = await this.couponRepository.getOneCouponByCode(couponCode);
            if (!getOne) {
                throw new CustomException_1.DataNotFoundException("Khong tim thay ma giam gia nao !");
            }
            const response = {
                ...getOne
            };
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async getOneCouponByKey(couponKey) {
        try {
            const getOne = await this.couponRepository.getOneCouponByKey(couponKey);
            if (!getOne) {
                return null;
            }
            const response = {
                ...getOne
            };
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
};
exports.CouponService = CouponService;
exports.CouponService = CouponService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("ICouponRepository")),
    __metadata("design:paramtypes", [Object])
], CouponService);
//# sourceMappingURL=CouponService.js.map