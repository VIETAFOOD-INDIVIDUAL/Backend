import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductRepository } from "../IRepository/IProductRepository";
import { PrismaClient, Product } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
import { DataNotFoundException, InternalServerErrorException } from "src/Base/Utils/CustomException";
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ProductRepository implements IProductRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    async deleteProduct(key: string): Promise<void> {
        try {
            const isExist = await this.getOneProduct(key).then((res) => res.status === 1);
            if (!isExist) {
                throw new DataNotFoundException("Không tìm thấy sản phẩm !");
            }
            await this.prisma.product.update({ where: { productKey: key }, data: { status: 2 } });
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async updateProduct(key: string, request: ProductRequest): Promise<Product> {
        const isExist = this.getOneProduct(key);
        if (isExist === null) {
            throw new InternalServerErrorException("Không tìm thấy sản phẩm !")
        }
        const updateProduct = await this.prisma.product.update({
            where: {
                productKey: key
            },
            data: {
                ...request
            }
        });
        return updateProduct;
    }

    async getOneProduct(key: string): Promise<Product> {
        try {
            var getAllProduct = await this.prisma.product.findFirst({ where: { productKey: key, status: 1 } });
            if (getAllProduct === null) {
                throw new InternalServerErrorException("Không tìm thấy sản phẩm !")
            }
            return getAllProduct;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException("Loi he thong !")
        }
    }
    async createProduct(request: ProductRequest): Promise<Product> {
        try {
            const creProduct = await this.prisma.product.create({
                data: {
                    ...request,
                    productKey: `PRO_${uuidv4()}`,
                    status: 1
                }
            });
            return creProduct;
        } catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }
    async getAllProduct(): Promise<Product[]> {
        try {
            var getAllProduct = await this.prisma.product.findMany({ where: { status: 1 } });
            return getAllProduct;
        } catch (error) {
            throw new InternalServerErrorException("Loi he thong !")
        }
    }
}