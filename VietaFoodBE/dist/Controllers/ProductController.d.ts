import { ProductResponse } from "src/Dtos/Products/Response/ProductRespose";
import { IProductService } from "src/Services/IService/IProductService";
export declare class ProductController {
    readonly productService: IProductService;
    constructor(productService: IProductService);
    getAllProduct(): Promise<ProductResponse[]>;
}
