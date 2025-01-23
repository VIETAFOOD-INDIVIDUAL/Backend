import { Order } from "@prisma/client";
import { IOrderRepository } from "../IRepository/IOrderRepository";
import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";
export declare class OrderRepository implements IOrderRepository {
    private prisma;
    constructor();
    updateOrder(order: Order): Promise<void>;
    createOrder(request: OrderRequest): Promise<Order>;
    getAllOrder(): Promise<Order[]>;
    getOneOrder(orderKey: string): Promise<Order>;
    updateStsOrder(orderKey: string, status: number): Promise<void>;
    getOrderOfCustomer(customerInfoKey: string): Promise<Order[]>;
}
