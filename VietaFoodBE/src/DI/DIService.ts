import { Module, Scope } from "@nestjs/common";
import { ProductService } from "src/Services/Service/ProductService";
import { DIRepository } from "./DIRepository";

@Module({
    imports: [DIRepository],
    providers: [
        {
            provide: "IProductService",
            useClass: ProductService,
            scope: Scope.REQUEST
        }
    ],
    exports: ['IProductService']
})
export class DIService{}