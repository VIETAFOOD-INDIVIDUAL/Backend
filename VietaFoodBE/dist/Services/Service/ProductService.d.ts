import { IProductService } from "../IService/IProductService";
import { IProductRepository } from "src/Repositories/IRepository/IProductRepository";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { Mapper } from '@automapper/core';
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
export declare class ProductService implements IProductService {
    private readonly productRepo;
    private readonly mapper;
    constructor(productRepo: IProductRepository, mapper: Mapper);
    getOneProduct(key: string): Promise<ProductResponse>;
    createProduct(request: ProductRequest): Promise<ProductResponse>;
    getAllProduct(): Promise<ProductResponse[]>;
}
