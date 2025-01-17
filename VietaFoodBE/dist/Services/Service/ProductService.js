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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const CustomException_1 = require("../../Base/Utils/CustomException");
const CustomException_2 = require("../../Base/Utils/CustomException");
let ProductService = class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
        this.productRepo = productRepo;
    }
    async deleteProduct(key) {
        await this.productRepo.deleteProduct(key);
    }
    async updateProduct(key, request) {
        try {
            const existingProduct = await this.productRepo.getOneProduct(key);
            if (!existingProduct) {
                throw new CustomException_1.DataNotFoundException("Không tìm thấy sản phẩm !");
            }
            const updatedProduct = await this.productRepo.updateProduct(key, request);
            const response = {
                ...updatedProduct
            };
            return response;
        }
        catch (error) {
            throw new CustomException_2.InternalServerErrorException(error.message);
        }
    }
    async getOneProduct(key) {
        const getOneProduct = await this.productRepo.getOneProduct(key);
        if (getOneProduct === null) {
            throw new CustomException_1.DataNotFoundException("Không tìm thấy sản phẩm !");
        }
        const response = {
            ...getOneProduct
        };
        return response;
    }
    async createProduct(request) {
        try {
            const createProduct = await this.productRepo.createProduct(request);
            const response = {
                ...createProduct
            };
            return response;
        }
        catch (error) {
            throw new CustomException_2.InternalServerErrorException(error.message);
        }
    }
    async getAllProduct() {
        const getAllProduct = await this.productRepo.getAllProduct();
        if (getAllProduct.length === 0) {
            throw new CustomException_1.DataNotFoundException("Không tìm thấy sản phẩm !");
        }
        const response = {
            ...getAllProduct
        };
        return response;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IProductRepository')),
    __metadata("design:paramtypes", [Object])
], ProductService);
//# sourceMappingURL=ProductService.js.map