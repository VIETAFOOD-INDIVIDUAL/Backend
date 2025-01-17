"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIService = void 0;
const common_1 = require("@nestjs/common");
const ProductService_1 = require("../Services/Service/ProductService");
const DIRepository_1 = require("./DIRepository");
const OrderService_1 = require("../Services/Service/OrderService");
const CustomerInfoService_1 = require("../Services/Service/CustomerInfoService");
const CouponService_1 = require("../Services/Service/CouponService");
const OrderDetailService_1 = require("../Services/Service/OrderDetailService");
let DIService = class DIService {
};
exports.DIService = DIService;
exports.DIService = DIService = __decorate([
    (0, common_1.Module)({
        imports: [DIRepository_1.DIRepository],
        providers: [
            {
                provide: "IProductService",
                useClass: ProductService_1.ProductService,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "IOrderService",
                useClass: OrderService_1.OrderService,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "ICouponService",
                useClass: CouponService_1.CouponService,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "ICustomerInfoService",
                useClass: CustomerInfoService_1.CustomerInfoService,
                scope: common_1.Scope.REQUEST
            },
            {
                provide: "IOrderDetailService",
                useClass: OrderDetailService_1.OrderDetailService,
                scope: common_1.Scope.REQUEST
            }
        ],
        exports: ['IProductService', 'IOrderService', 'ICouponService', 'ICustomerInfoService', 'IOrderDetailService'],
    })
], DIService);
//# sourceMappingURL=DIService.js.map