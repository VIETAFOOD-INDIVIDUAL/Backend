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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const CustomException_1 = require("../../Base/Utils/CustomException");
const uuid_1 = require("uuid");
let ProductRepository = class ProductRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async deleteProduct(key) {
        try {
            const isExist = await this.getOneProduct(key).then((res) => res.status === 1);
            if (!isExist) {
                throw new CustomException_1.DataNotFoundException("Không tìm thấy sản phẩm !");
            }
            await this.prisma.product.update({ where: { productKey: key }, data: { status: 2 } });
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async updateProduct(key, request) {
        const isExist = this.getOneProduct(key);
        if (isExist === null) {
            throw new CustomException_1.InternalServerErrorException("Không tìm thấy sản phẩm !");
        }
        const updateProduct = await this.prisma.product.update({
            where: {
                productKey: key
            },
            data: {
                ...request
            }
        });
        return updateProduct;
    }
    async getOneProduct(key) {
        try {
            var getAllProduct = await this.prisma.product.findFirst({ where: { productKey: key, status: 1 } });
            if (getAllProduct === null) {
                throw new CustomException_1.InternalServerErrorException("Không tìm thấy sản phẩm !");
            }
            return getAllProduct;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException("Loi he thong !");
        }
    }
    async createProduct(request) {
        try {
            const creProduct = await this.prisma.product.create({
                data: {
                    ...request,
                    productKey: `PRO_${(0, uuid_1.v4)()}`,
                    status: 1
                }
            });
            return creProduct;
        }
        catch (error) {
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async getAllProduct() {
        try {
            var getAllProduct = await this.prisma.product.findMany({ where: { status: 1 } });
            return getAllProduct;
        }
        catch (error) {
            throw new CustomException_1.InternalServerErrorException("Loi he thong !");
        }
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProductRepository);
//# sourceMappingURL=ProductRepository.js.map