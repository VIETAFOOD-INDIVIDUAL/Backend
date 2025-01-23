import { IOrderService } from "../IService/IOrderService";
import { IOrderRepository } from "src/Repositories/IRepository/IOrderRepository";
import { OrderResponse } from "src/Dtos/Orders/Response/OrderResponse";
import { ICustomerInfoRepository } from "src/Repositories/IRepository/ICustomerInfoRepository";
import { ICouponRepository } from "src/Repositories/IRepository/ICouponRepository";
import { IOrderDetailRepository } from "src/Repositories/IRepository/IOrderDetailRepository";
import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";
export declare class OrderService implements IOrderService {
    readonly orderRepository: IOrderRepository;
    private readonly couponRepository;
    private readonly customerRepository;
    private readonly orderDetailRepository;
    constructor(orderRepository: IOrderRepository, couponRepository: ICouponRepository, customerRepository: ICustomerInfoRepository, orderDetailRepository: IOrderDetailRepository);
    createOrder(request: OrderRequest): Promise<OrderResponse>;
    getOneOrder(orderKey: string): Promise<OrderResponse>;
    getAllOrder(): Promise<OrderResponse[]>;
    updateStsOrder(orderKey: string, status: number): Promise<void>;
}
