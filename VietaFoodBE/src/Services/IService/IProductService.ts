import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";

export interface IProductService {
    getAllProduct(): Promise<ProductResponse[]>
}