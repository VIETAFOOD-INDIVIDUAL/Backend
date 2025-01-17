import { IProductRepository } from "../IRepository/IProductRepository";
import { Product } from "@prisma/client";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
export declare class ProductRepository implements IProductRepository {
    private prisma;
    constructor();
    deleteProduct(key: string): Promise<void>;
    updateProduct(key: string, request: ProductRequest): Promise<Product>;
    getOneProduct(key: string): Promise<Product>;
    createProduct(request: ProductRequest): Promise<Product>;
    getAllProduct(): Promise<Product[]>;
}
