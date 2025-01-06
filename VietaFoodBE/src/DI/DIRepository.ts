import { Module, Scope } from "@nestjs/common";
import { ProductRepository } from "src/Repositories/Repository/ProductRepository";

@Module ({
    providers: [
        {
            provide: "IProductRepository",
            useClass: ProductRepository,
            scope: Scope.REQUEST
        }
    ],
    exports: ['IProductRepository'],
})
export class DIRepository{}
