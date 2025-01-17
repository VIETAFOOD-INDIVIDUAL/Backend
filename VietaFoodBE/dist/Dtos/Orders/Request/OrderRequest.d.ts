import { CustomerInfoRequest } from "src/Dtos/CustomerInfo/Request/CustomerInfoRequest";
import { OrderDetailRequest } from "src/Dtos/OrderDetail/Request/OrderDetailRequest";
export declare class OrderRequest {
    couponCode: string | null;
    totalPrice: number;
    status: number;
    imgUrl?: string;
    customerInfo: CustomerInfoRequest;
    orderDetails: OrderDetailRequest[];
}
