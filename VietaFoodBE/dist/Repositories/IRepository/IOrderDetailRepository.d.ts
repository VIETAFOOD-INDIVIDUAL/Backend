import { Order, OrderDetail } from "@prisma/client";
import { OrderDetailRequest } from "src/Dtos/OrderDetail/Request/OrderDetailRequest";
export interface IOrderDetailRepository {
    createOrderDetail(request: OrderDetailRequest, orderKey: string): Promise<OrderDetail>;
    updateOrder(order: Order): Promise<void>;
}
