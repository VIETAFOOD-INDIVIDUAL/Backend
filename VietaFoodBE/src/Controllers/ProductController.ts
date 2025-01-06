import { Controller, Get, Inject, NotFoundException } from "@nestjs/common";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductService } from "src/Services/IService/IProductService";

@Controller('Product')
export class ProductController {
    constructor(
        @Inject("IProductService")
        readonly productService: IProductService
    ) {
        this.productService = productService;
    }

    @Get('get-all-product')
    async getAllProduct(): Promise<ProductResponse[]> {
        try {
            var response = await this.productService.getAllProduct()
            return response;
        } catch (error) {
            throw new NotFoundException(error)
        }
    }
}