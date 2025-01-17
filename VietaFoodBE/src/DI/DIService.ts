import { Module, Scope } from "@nestjs/common";
import { ProductService } from "src/Services/Service/ProductService";
import { DIRepository } from "./DIRepository";
import { OrderService } from "src/Services/Service/OrderService";
import { CustomerInfoService } from "src/Services/Service/CustomerInfoService";
import { CouponService } from "src/Services/Service/CouponService";
import { OrderDetailService } from "src/Services/Service/OrderDetailService";

@Module({
    imports: [DIRepository],
    providers: [
        {
            provide: "IProductService",
            useClass: ProductService,
            scope: Scope.REQUEST
        },
        {
            provide: "IOrderService",
            useClass: OrderService,
            scope: Scope.REQUEST
        },
        {
            provide: "ICouponService",
            useClass: CouponService,
            scope: Scope.REQUEST
        },
        {
            provide: "ICustomerInfoService",
            useClass: CustomerInfoService,
            scope: Scope.REQUEST
        },
        {
            provide: "IOrderDetailService",
            useClass: OrderDetailService,
            scope: Scope.REQUEST
        }
    ],
    exports: ['IProductService', 'IOrderService', 'ICouponService', 'ICustomerInfoService', 'IOrderDetailService'],
})
export class DIService{}