import { Coupon } from "@prisma/client";
import { CouponRequest } from "src/Dtos/Coupon/Request/CouponRequest";
export interface ICouponRepository {
    getAllCoupon(): Promise<Coupon[]>;
    updateCoupon(couponKey: string, request: CouponRequest): Promise<Coupon>;
    useCoupon(couponCode: string): Promise<Coupon>;
    createCoupon(request: CouponRequest): Promise<Coupon>;
    getOneCouponByCode(couponCode: string): Promise<Coupon>;
    getOneCouponByKey(couponKey: string): Promise<Coupon>;
}
