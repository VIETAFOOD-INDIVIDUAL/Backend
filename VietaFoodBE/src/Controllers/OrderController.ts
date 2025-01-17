import { Body, Controller, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { DataResponse } from "src/Base/Common/DataReponse";
import { DataNotFoundException, InternalServerErrorException } from "src/Base/Utils/CustomException";
import { OrderRequest } from "src/Dtos/Orders/Request/OrderRequest";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IOrderService } from "src/Services/IService/IOrderService";

@Controller('order')
export class OrderController {
    constructor(
        @Inject("IOrderService")
        readonly orderService: IOrderService) {
        this.orderService = orderService;
    }

    @Get('getAllOrder')
    async getAllOrder(): Promise<DataResponse<any>> {
        try {
            const response = await this.orderService.getAllOrder();
            return new DataResponse(200, "Đã tải dữ liệu thành công", response);
        } catch (e) {
            if (e instanceof DataNotFoundException) {
                throw new DataNotFoundException(e.message);
            } 
            throw new InternalServerErrorException(e.message);
        }
    }

    @Get(':orderKey')
    async getOneOrder(@Param('orderKey') orderKey: string): Promise<DataResponse<any>> {
        try {
            const response = await this.orderService.getOneOrder(orderKey);
            return new DataResponse(200, "Đã tải dữ liệu thành công", response);
        } catch (e) {
            if (e instanceof DataNotFoundException) {
                throw new DataNotFoundException(e.message);
            } 
            throw new InternalServerErrorException(e.message);
        }
    }

    @Patch(':orderKey')
    async deleteOrder(@Param('orderKey') orderKey: string): Promise<DataResponse<any>> {
        try {
            await this.orderService.deleteOrder(orderKey);
            return new DataResponse(200, "Xóa dữ liệu thành công", null);
        } catch (e) {
            if (e instanceof DataNotFoundException) {
                throw new DataNotFoundException(e.message);
            } 
            throw new InternalServerErrorException(e.message);
        }
    }

    @Post('createOrder')
    async createOrder(@Body() request: OrderRequest ): Promise<DataResponse<any>> {
        try {
            const response = await this.orderService.createOrder(request);
            return new DataResponse(200, "Tạo đơn hàng thành công", response);
        } catch (e) {
            throw new InternalServerErrorException(e.message);
        }
    }
}