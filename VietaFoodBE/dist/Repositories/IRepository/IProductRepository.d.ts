import { Product } from "@prisma/client";
import { ProductRequest } from "src/Dtos/Products/Request/ProductRequest";
export interface IProductRepository {
    getAllProduct(): Promise<Product[]>;
    createProduct(request: ProductRequest): Promise<Product>;
    getOneProduct(key: string): Promise<Product>;
    updateProduct(key: string, request: ProductRequest): Promise<Product>;
    deleteProduct(key: string): Promise<void>;
}
