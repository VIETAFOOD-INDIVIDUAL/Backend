"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIRepository = void 0;
const common_1 = require("@nestjs/common");
const CouponRepository_1 = require("../Repositories/Repository/CouponRepository");
const CustomerInfoRepository_1 = require("../Repositories/Repository/CustomerInfoRepository");
const OrderDetailRepository_1 = require("../Repositories/Repository/OrderDetailRepository");
const OrderRepository_1 = require("../Repositories/Repository/OrderRepository");
const ProductRepository_1 = require("../Repositories/Repository/ProductRepository");
let DIRepository = class DIRepository {
};
exports.DIRepository = DIRepository;
exports.DIRepository = DIRepository = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: "IProductRepository",
                useClass: ProductRepository_1.ProductRepository,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "IOrderRepository",
                useClass: OrderRepository_1.OrderRepository,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "ICouponRepository",
                useClass: CouponRepository_1.CouponRepository,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "ICustomerInfoRepository",
                useClass: CustomerInfoRepository_1.CustomerInfoRepository,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "IOrderDetailRepository",
                useClass: OrderDetailRepository_1.OrderDetailRepository,
                scope: common_1.Scope.REQUEST
            }
        ],
        exports: ['IProductRepository', 'IOrderRepository', 'ICouponRepository', 'ICustomerInfoRepository', 'IOrderDetailRepository'],
    })
], DIRepository);
//# sourceMappingURL=DIRepository.js.map