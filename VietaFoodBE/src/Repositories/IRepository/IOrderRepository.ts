import { Order } from "@prisma/client";
import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";

export interface IOrderRepository { 
    getAllOrder() : Promise<Order[]>
    getOneOrder(orderKey: string): Promise<Order>
    deleteOrder(orderKey: string): Promise<void>
    createOrder(request: OrderRequest): Promise<Order>
    updateOrder(order: Order): Promise<void>
}