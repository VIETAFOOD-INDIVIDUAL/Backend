import { Coupon } from "@prisma/client";
import { ICouponRepository } from "../IRepository/ICouponRepository";
import { CouponRequest } from "src/Dtos/Coupon/Request/CouponRequest";
export declare class CouponRepository implements ICouponRepository {
    private prisma;
    constructor();
    getAllCoupon(): Promise<Coupon[]>;
    getOneCouponByKey(couponKey: string): Promise<Coupon>;
    getOneCouponByCode(couponCode: string): Promise<Coupon>;
    createCoupon(request: CouponRequest): Promise<Coupon>;
    useCoupon(couponCode: string): Promise<Coupon>;
    updateCoupon(couponKey: string, request: CouponRequest): Promise<Coupon>;
}
