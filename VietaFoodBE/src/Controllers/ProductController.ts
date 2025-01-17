import { Body, Controller, Get, Inject, NotFoundException, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductService } from "src/Services/IService/IProductService";
import { DataNotFoundException } from "src/Base/Utils/CustomException";
import { InternalServerErrorException } from "src/Base/Utils/CustomException";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
import { DataResponse } from "src/Base/Common/DataReponse";

@Controller('product')
export class ProductController {
    constructor(
        @Inject("IProductService")
        readonly productService: IProductService
    ) {
        this.productService = productService;
    }

    @Get('get-all-product')
    async getAllProduct(): Promise<DataResponse<any>> {
        try {
            var response = await this.productService.getAllProduct()
            return new DataResponse (200, "Đã tải dữ liệu thành công", response);
        } catch (error) {
            if(error instanceof DataNotFoundException) {
                throw new NotFoundException(error.message)
            }else if(error instanceof InternalServerErrorException) {
                throw new NotFoundException(error.message)
            }
        }
    }

    @Post('create-product')
    async createProduct(@Body() request: ProductRequest) : Promise<DataResponse<any>> {
        try {
            var response = await this.productService.createProduct(request)
            return new DataResponse (200, "Đã tạo thành công", response);   
        } catch (error) {
            if(error instanceof DataNotFoundException) {
                throw new NotFoundException(error.message)
            }else if(error instanceof InternalServerErrorException) {
                throw new NotFoundException(error.message)
            }
        }
    }

    @Get()
    async getOneProduct(@Query('key') key: string): Promise<DataResponse<any>> {
        try {
            var response = await this.productService.getOneProduct(key)
            return new DataResponse (200, "Đã tải dữ liệu thành công", response);
        } catch (error) {
            if(error instanceof DataNotFoundException) {
                throw new NotFoundException(error.message)
            }else if(error instanceof InternalServerErrorException) {
                throw new NotFoundException(error.message)
            }
        }
    }

    @Put('update-product/:key')
    async updateProduct(@Param('key') key: string, @Body() request: ProductRequest) : Promise<DataResponse<any>> {
        try {
            var response = await this.productService.updateProduct(key, request)
            return new DataResponse (200, "Đã cập nhật thành công", response);
        } catch (error) {
            if(error instanceof DataNotFoundException) {
                throw new NotFoundException(error.message)
            }else if(error instanceof InternalServerErrorException) {
                throw new NotFoundException(error.message)
            }
        }
    }

    @Patch('delete-product/:key')
    async deleteProduct(@Param('key') key: string) : Promise<DataResponse<any>> {
        try {
            var response = await this.productService.deleteProduct(key)
            return new DataResponse (200, "Đã cập nhật thành công", response);
        } catch (error) {
            if(error instanceof DataNotFoundException) {
                throw new NotFoundException(error.message)
            }else if(error instanceof InternalServerErrorException) {
                throw new NotFoundException(error.message)
            }
        }
    }
}