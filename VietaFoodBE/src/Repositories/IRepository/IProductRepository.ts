import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";

export interface IProductRepository {
    getAllProduct() : Promise<ProductResponse[]>;
    createProduct(request: ProductRequest) : Promise<ProductResponse>;
    getOneProduct(key: string) : Promise<ProductResponse>;
}