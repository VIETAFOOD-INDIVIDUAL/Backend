import { OrderDetailRequest } from "src/Dtos/OrderDetail/Request/OrderDetailRequest";
import { OrderDetailResponse } from "src/Dtos/OrderDetail/Response/OrderDetailResponse";
export interface IOrderDetailService {
    createOrderDetail(request: OrderDetailRequest, orderKey: string): Promise<OrderDetailResponse>;
}
