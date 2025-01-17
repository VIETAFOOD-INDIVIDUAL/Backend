import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";
import { OrderResponse } from "src/Dtos/Orders/Response/OrderResponse";

export interface IOrderService {
    getAllOrder(): Promise<OrderResponse[]>
    getOneOrder(orderKey: string): Promise<OrderResponse>
    deleteOrder(orderKey: string): Promise<void>
    createOrder(request: OrderRequest): Promise<OrderResponse>
}