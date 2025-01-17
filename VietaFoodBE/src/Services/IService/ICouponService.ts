import { CouponRequest } from "src/Dtos/Coupon/Request/CouponRequest"
import { CouponResponse } from "src/Dtos/Coupon/Response/CouponResponse"

export interface ICouponService {
        getAllCoupon(): Promise<CouponResponse[]>
        updateCoupon(couponKey: string, request: CouponRequest): Promise<CouponResponse>
        useCoupon(couponCode: string): Promise<CouponResponse>
        createCoupon(request: CouponRequest): Promise<CouponResponse>
        getOneCouponByCode(couponCode: string): Promise<CouponResponse>
        getOneCouponByKey(couponKey: string): Promise<CouponResponse>
}