import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductRepository } from "../IRepository/IProductRepository";
import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository implements IProductRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    async getAllProduct(): Promise<ProductResponse[]> {
        try {
            var getAllProduct = await this.prisma.product.findMany({where: {status: 1}});
            return getAllProduct;
        } catch (error) {
            throw new Error("Loi he thong !")
        }
    }
}