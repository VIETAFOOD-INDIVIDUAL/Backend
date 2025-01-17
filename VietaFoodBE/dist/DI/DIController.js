"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIController = void 0;
const common_1 = require("@nestjs/common");
const ProductController_1 = require("../Controllers/ProductController");
const DIService_1 = require("./DIService");
const OrderController_1 = require("../Controllers/OrderController");
let DIController = class DIController {
};
exports.DIController = DIController;
exports.DIController = DIController = __decorate([
    (0, common_1.Module)({
        imports: [DIService_1.DIService],
        controllers: [
            ProductController_1.ProductController,
            OrderController_1.OrderController
        ]
    })
], DIController);
//# sourceMappingURL=DIController.js.map