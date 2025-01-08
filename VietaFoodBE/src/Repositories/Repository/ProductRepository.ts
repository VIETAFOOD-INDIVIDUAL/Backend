import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductRepository } from "../IRepository/IProductRepository";
import { PrismaClient } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
import { InternalServerErrorException } from "src/Base/Utils/CustomException";
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ProductRepository implements IProductRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    
    async getOneProduct(key: string): Promise<ProductResponse> {
        try {
            var getAllProduct = await this.prisma.product.findFirst({ where: { productKey: key } });
            return getAllProduct;
        } catch (error) {
            throw new InternalServerErrorException("Loi he thong !")
        }
    }

    async createProduct(request: ProductRequest): Promise<ProductResponse> {
        try {
            const creProduct = await this.prisma.product.create({
                data: {
                    name: request.name,
                    description: request.description,
                    expiryDay: request.expiryDay,
                    guildToUsing: request.guildToUsing,
                    imageURL: request.imageURL,
                    price: request.price,
                    quantity: request.quantity,
                    weight: request.weight,
                    productKey: `PRO_${uuidv4()}`,
                    status: 1
                }
            });
            return creProduct;
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
    async getAllProduct(): Promise<ProductResponse[]> {
        try {
            var getAllProduct = await this.prisma.product.findMany({ where: { status: 1 } });
            return getAllProduct;
        } catch (error) {
            throw new InternalServerErrorException("Loi he thong !")
        }
    }
}