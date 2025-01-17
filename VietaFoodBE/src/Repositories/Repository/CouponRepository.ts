import { Coupon, PrismaClient } from "@prisma/client";
import { ICouponRepository } from "../IRepository/ICouponRepository";
import { InternalServerErrorException, InvalidDataException } from "src/Base/Utils/CustomException";
import { CouponRequest } from "src/Dtos/Coupon/Request/CouponRequest";
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from "@nestjs/common";

@Injectable()
export class CouponRepository implements ICouponRepository {
    private prisma = new PrismaClient();
    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAllCoupon(): Promise<Coupon[]> {
        try {
            return await this.prisma.coupon.findMany();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async getOneCouponByKey(couponKey: string): Promise<Coupon> {
        try {
            return await this.prisma.coupon.findFirst({
                where: {
                    couponKey: couponKey
                }
            });
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async getOneCouponByCode(couponCode: string): Promise<Coupon> {
        try {
            return await this.prisma.coupon.findFirst({
                where: {
                    couponCode: couponCode,
                    status: 1
                }
            });
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async createCoupon(request: CouponRequest): Promise<Coupon> {

        try {
            const isExistCode = await this.getOneCouponByCode(request.couponCode);
            if (isExistCode !== null) {
                throw new InvalidDataException("Ma giam gia da ton tai !");
            }
            const result = await this.prisma.coupon.create({
                data: {
                    ...request,
                    createdDate: new Date(),
                    createdBy: "Admin",
                    status: 1,
                    couponKey: `CP_${uuidv4()}`

                }
            });
            return result;
        } catch (error) {
            if (error instanceof InvalidDataException) {
                throw new InvalidDataException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }

    async useCoupon(couponCode: string): Promise<Coupon> {
        try {
            const isExist = await this.getOneCouponByCode(couponCode);
            if (isExist === null) {
                throw new InvalidDataException("Khong tim thay ma giam gia !");
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
        } catch (error) {
            if (error instanceof InvalidDataException) {
                throw new InvalidDataException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }

    async updateCoupon(couponKey: string, request: CouponRequest): Promise<Coupon> {
        try {
            const isExist = await this.getOneCouponByKey(couponKey);
            if (isExist === null) {
                throw new InvalidDataException("Khong tim thay ma giam gia !");
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
        } catch (error) {
            if(error instanceof InvalidDataException){
                throw new InvalidDataException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
}