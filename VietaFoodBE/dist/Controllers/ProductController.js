"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const CustomException_1 = require("../Base/Utils/CustomException");
const CustomException_2 = require("../Base/Utils/CustomException");
const ProductRequest_1 = require("../Dtos/Products/Request/ProductRequest");
const DataReponse_1 = require("../Base/Common/DataReponse");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.productService = productService;
    }
    async getAllProduct() {
        try {
            var response = await this.productService.getAllProduct();
            return new DataReponse_1.DataResponse(200, "Đã tải dữ liệu thành công", response);
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else if (error instanceof CustomException_2.InternalServerErrorException) {
                throw new common_1.NotFoundException(error.message);
            }
        }
    }
    async createProduct(request) {
        try {
            var response = await this.productService.createProduct(request);
            return new DataReponse_1.DataResponse(200, "Đã tạo thành công", response);
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else if (error instanceof CustomException_2.InternalServerErrorException) {
                throw new common_1.NotFoundException(error.message);
            }
        }
    }
    async getOneProduct(key) {
        try {
            var response = await this.productService.getOneProduct(key);
            return new DataReponse_1.DataResponse(200, "Đã tải dữ liệu thành công", response);
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else if (error instanceof CustomException_2.InternalServerErrorException) {
                throw new common_1.NotFoundException(error.message);
            }
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)('get-all-product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Post)('create-product'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductRequest_1.ProductRequest]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getOneProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __param(0, (0, common_1.Inject)("IProductService")),
    __metadata("design:paramtypes", [Object])
], ProductController);
//# sourceMappingURL=ProductController.js.map