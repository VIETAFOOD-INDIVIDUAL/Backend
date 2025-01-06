import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";

export interface IProductRepository {
    getAllProduct() : Promise<ProductResponse[]>
}