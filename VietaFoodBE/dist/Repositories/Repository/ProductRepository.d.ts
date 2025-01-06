import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductRepository } from "../IRepository/IProductRepository";
export declare class ProductRepository implements IProductRepository {
    private prisma;
    constructor();
    getAllProduct(): Promise<ProductResponse[]>;
}
