import { DataResponse } from "src/Base/Common/DataReponse";
import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";
import { IOrderService } from "src/Services/IService/IOrderService";
export declare class OrderController {
    readonly orderService: IOrderService;
    constructor(orderService: IOrderService);
    getAllOrder(): Promise<DataResponse<any>>;
    getOneOrder(orderKey: string): Promise<DataResponse<any>>;
    updateStsOrder(orderKey: string, status: number): Promise<DataResponse<any>>;
    createOrder(request: OrderRequest): Promise<DataResponse<any>>;
}
