import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";
import { OrderResponse } from "src/Dtos/Orders/Response/OrderResponse";
export interface IOrderService {
    getAllOrder(): Promise<OrderResponse[]>;
    getOneOrder(orderKey: string): Promise<OrderResponse>;
    updateStsOrder(orderKey: string, status: number): Promise<void>;
    createOrder(request: OrderRequest): Promise<OrderResponse>;
}
