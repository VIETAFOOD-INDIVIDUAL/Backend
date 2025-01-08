import { Inject, Injectable } from "@nestjs/common";
import { IProductService } from "../IService/IProductService";
import { IProductRepository } from "src/Repositories/IRepository/IProductRepository";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from '@automapper/core';
import { Prisma } from "@prisma/client";
import { DataNotFoundException } from "src/Base/Utils/CustomException";
import { InternalServerErrorException } from "src/Base/Utils/CustomException";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";

@Injectable()
export class ProductService implements IProductService {
    constructor(
        @Inject('IProductRepository')
        private readonly productRepo: IProductRepository,
        @InjectMapper()
        private readonly mapper: Mapper
    ) { }

    async getOneProduct(key: string): Promise<ProductResponse> {
        const getOneProduct = await this.productRepo.getOneProduct(key);
        if (getOneProduct === null) {
            throw new DataNotFoundException("Không tìm thấy sản phẩm !")
        }
        const response = {
            ...getOneProduct
        } as ProductResponse
        //const response = this.mapper.mapArray(getAllProduct, Prisma.ModelName.Product, ProductResponse);
        return response;
    }

    async createProduct(request: ProductRequest): Promise<ProductResponse> {
        try {
            const createProduct = await this.productRepo.createProduct(request);
            const response = {
                ...createProduct
            } as ProductResponse
            return response;
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async getAllProduct(): Promise<ProductResponse[]> {
        const getAllProduct = await this.productRepo.getAllProduct();
        if (getAllProduct.length === 0) {
            throw new DataNotFoundException("Không tìm thấy sản phẩm !")
        }
        const response = {
            ...getAllProduct
        } as ProductResponse[]
        return response;
    }
}