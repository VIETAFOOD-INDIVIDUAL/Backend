import { Order, OrderDetail } from "@prisma/client";
import { IOrderDetailRepository } from "../IRepository/IOrderDetailRepository";
import { OrderDetailRequest } from "src/Dtos/OrderDetail/Request/OrderDetailRequest";
export declare class OrderDetailRepository implements IOrderDetailRepository {
    private prisma;
    constructor();
    updateOrder(order: Order): Promise<void>;
    createOrderDetail(request: OrderDetailRequest, orderKey: string): Promise<OrderDetail>;
}
