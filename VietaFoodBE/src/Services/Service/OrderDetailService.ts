import { OrderDetail } from "@prisma/client";
import { OrderDetailRequest } from "src/Dtos/OrderDetail/Request/OrderDetailRequest";
import { IOrderDetailService } from "../IService/IOrderDetailService";
import { Inject, InternalServerErrorException } from "@nestjs/common";
import { IOrderDetailRepository } from "src/Repositories/IRepository/IOrderDetailRepository";
import { OrderDetailResponse } from "src/Dtos/OrderDetail/Response/OrderDetailResponse";

export class OrderDetailService implements IOrderDetailService {
    constructor(
        @Inject("IOrderDetailRepository")
        private readonly orderDetailRepository: IOrderDetailRepository
    ) {
        this.orderDetailRepository = orderDetailRepository;
    }

    async createOrderDetail(request: OrderDetailRequest, orderKey: string): Promise<OrderDetailResponse> {
        try {
            const result = await this.orderDetailRepository.createOrderDetail(request, orderKey);
            const response = {
                ...result
            } as OrderDetailResponse;
            return response;
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }

}