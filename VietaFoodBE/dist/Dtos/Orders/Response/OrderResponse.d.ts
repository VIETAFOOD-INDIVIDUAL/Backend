import { Decimal } from "@prisma/client/runtime/library";
import { CustomerInfoResponse } from "src/Dtos/CustomerInfo/Response/CustomerInfoResponse";
import { OrderDetailResponse } from "src/Dtos/OrderDetail/Response/OrderDetailResponse";
export declare class OrderResponse {
    orderKey: string;
    customerInfoKey: string | null;
    couponKey: string | null;
    createdAt: Date;
    totalPrice: Decimal;
    status: number;
    imgUrl?: string;
    customerInfor: CustomerInfoResponse;
    orderDetails: OrderDetailResponse[];
    couponResponse: any;
}
