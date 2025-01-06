import { IProductService } from "../IService/IProductService";
import { IProductRepository } from "src/Repositories/IRepository/IProductRepository";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { Mapper } from '@automapper/core';
export declare class ProductService implements IProductService {
    private readonly productRepo;
    private readonly mapper;
    constructor(productRepo: IProductRepository, mapper: Mapper);
    getAllProduct(): Promise<ProductResponse[]>;
}
