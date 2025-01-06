import { Inject, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { IProductService } from "../IService/IProductService";
import { IProductRepository } from "src/Repositories/IRepository/IProductRepository";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from '@automapper/core';
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductService implements IProductService {
    constructor(
        @Inject('IProductRepository')
        private readonly productRepo: IProductRepository,
        @InjectMapper()
        private readonly mapper: Mapper
    ) {}

        async getAllProduct(): Promise<ProductResponse[]> {
            try {
                const getAllProduct = await this.productRepo.getAllProduct();
                console.log("product", getAllProduct)
                if(getAllProduct.length === 0) {
                    throw new NotFoundException("Khong tim thay product")
                }
                //const response = this.mapper.mapArray(getAllProduct, Prisma.ModelName.Product, ProductResponse);
                return getAllProduct;
            } catch (error) {
            throw new InternalServerErrorException("Loi he thong !")
        }
    }
}