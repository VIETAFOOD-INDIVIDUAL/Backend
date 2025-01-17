import { Order, OrderDetail, PrismaClient } from "@prisma/client";
import { IOrderDetailRepository } from "../IRepository/IOrderDetailRepository";
import { InternalServerErrorException } from "src/Base/Utils/CustomException";
import { OrderDetailRequest } from "src/Dtos/OrderDetail/Request/OrderDetailRequest";
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderDetailRepository implements IOrderDetailRepository {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    
    async updateOrder(order: Order): Promise<void> {
        try{
            await this.prisma.order.update({
                where: {
                    orderKey: order.orderKey
                },
                data: order
            });
        }catch(e){
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }

    async createOrderDetail(request: OrderDetailRequest, orderKey: string) : Promise<OrderDetail> {
        try {
            const result = await this.prisma.orderDetail.create({
                data: {
                    orderDetailKey: `OD_${uuidv4()}`,
                    ...request,
                    orderKey: orderKey
                }
            });
            return result;
        } catch (e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }
}