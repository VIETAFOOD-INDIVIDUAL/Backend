import { IProductService } from "src/Services/IService/IProductService";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
import { DataResponse } from "src/Base/Common/DataReponse";
export declare class ProductController {
    readonly productService: IProductService;
    constructor(productService: IProductService);
    getAllProduct(): Promise<DataResponse<any>>;
    createProduct(request: ProductRequest): Promise<DataResponse<any>>;
    getOneProduct(key: string): Promise<DataResponse<any>>;
}
