import { IProductService } from "../IService/IProductService";
import { IProductRepository } from "src/Repositories/IRepository/IProductRepository";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
export declare class ProductService implements IProductService {
    private readonly productRepo;
    constructor(productRepo: IProductRepository);
    deleteProduct(key: string): Promise<void>;
    updateProduct(key: string, request: ProductRequest): Promise<ProductResponse>;
    getOneProduct(key: string): Promise<ProductResponse>;
    createProduct(request: ProductRequest): Promise<ProductResponse>;
    getAllProduct(): Promise<ProductResponse[]>;
}
