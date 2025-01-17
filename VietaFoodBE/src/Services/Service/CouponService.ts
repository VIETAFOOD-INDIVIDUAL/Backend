import { Inject, Injectable } from "@nestjs/common";
import { ICouponService } from "../IService/ICouponService";
import { In } from "typeorm";
import { ICouponRepository } from "src/Repositories/IRepository/ICouponRepository";
import { CouponRequest } from "src/Dtos/Coupon/Request/CouponRequest";
import { CouponResponse } from "src/Dtos/Coupon/Response/CouponResponse";
import { DataNotFoundException, InternalServerErrorException } from "src/Base/Utils/CustomException";

@Injectable()
export class CouponService implements ICouponService {
    constructor(
        @Inject("ICouponRepository")
        private readonly couponRepository: ICouponRepository
    ) {
        this.couponRepository = couponRepository;
    }
    async getAllCoupon(): Promise<CouponResponse[]> {
        try {
            const getAllCoupon = await this.couponRepository.getAllCoupon();
            if (!getAllCoupon) {
                throw new DataNotFoundException("Khong tim thay ma giam gia nao !");
            }
            const response: CouponResponse[] = [...getAllCoupon];
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async updateCoupon(couponKey: string, request: CouponRequest): Promise<CouponResponse> {
        try {
            const result = await this.couponRepository.updateCoupon(couponKey, request);
            const response = {
                ...result
            } as CouponResponse;
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async useCoupon(couponCode: string): Promise<CouponResponse> {
        try {
            const getOne = await this.couponRepository.useCoupon(couponCode);
            const response = {
                ...getOne
            } as CouponResponse
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async createCoupon(request: CouponRequest): Promise<CouponResponse> {
        try {
            const result = await this.couponRepository.createCoupon(request);
            const response = {
                ...result
            } as CouponResponse;
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async getOneCouponByCode(couponCode: string): Promise<CouponResponse> {
        try {
            const getOne = await this.couponRepository.getOneCouponByCode(couponCode);
            if (!getOne) {
                throw new DataNotFoundException("Khong tim thay ma giam gia nao !");
            }
            const response = {
                ...getOne
            } as CouponResponse;
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async getOneCouponByKey(couponKey: string): Promise<CouponResponse> {
        try {
            const getOne = await this.couponRepository.getOneCouponByKey(couponKey);
            if (!getOne) {
                return null;
            }
            const response = {
                ...getOne
            } as CouponResponse;
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }

}