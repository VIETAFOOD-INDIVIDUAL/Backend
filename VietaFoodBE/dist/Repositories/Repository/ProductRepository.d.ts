import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductRepository } from "../IRepository/IProductRepository";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
export declare class ProductRepository implements IProductRepository {
    private prisma;
    constructor();
    getOneProduct(key: string): Promise<ProductResponse>;
    createProduct(request: ProductRequest): Promise<ProductResponse>;
    getAllProduct(): Promise<ProductResponse[]>;
}
