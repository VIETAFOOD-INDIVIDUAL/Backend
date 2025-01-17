import { Module, Scope } from "@nestjs/common";
import { CouponRepository } from "src/Repositories/Repository/CouponRepository";
import { CustomerInfoRepository } from "src/Repositories/Repository/CustomerInfoRepository";
import { OrderDetailRepository } from "src/Repositories/Repository/OrderDetailRepository";
import { OrderRepository } from "src/Repositories/Repository/OrderRepository";
import { ProductRepository } from "src/Repositories/Repository/ProductRepository";

@Module ({
    providers: [
        {
            provide: "IProductRepository",
            useClass: ProductRepository,
            scope: Scope.REQUEST
        },
        {
            provide: "IOrderRepository",
            useClass: OrderRepository,
            scope: Scope.REQUEST
        },
        {
            provide: "ICouponRepository",
            useClass: CouponRepository,
            scope: Scope.REQUEST
        },
        {
            provide: "ICustomerInfoRepository",
            useClass: CustomerInfoRepository,
            scope: Scope.REQUEST
        },
        {
            provide: "IOrderDetailRepository",
            useClass: OrderDetailRepository,
            scope: Scope.REQUEST
        }
    ],
    exports: ['IProductRepository','IOrderRepository', 'ICouponRepository', 'ICustomerInfoRepository', 'IOrderDetailRepository'],
})
export class DIRepository{}
