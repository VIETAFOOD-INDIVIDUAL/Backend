import { OrderDetailRequest } from "src/Dtos/OrderDetail/Request/OrderDetailRequest";
import { IOrderDetailService } from "../IService/IOrderDetailService";
import { IOrderDetailRepository } from "src/Repositories/IRepository/IOrderDetailRepository";
import { OrderDetailResponse } from "src/Dtos/OrderDetail/Response/OrderDetailResponse";
export declare class OrderDetailService implements IOrderDetailService {
    private readonly orderDetailRepository;
    constructor(orderDetailRepository: IOrderDetailRepository);
    createOrderDetail(request: OrderDetailRequest, orderKey: string): Promise<OrderDetailResponse>;
}
