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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const DataReponse_1 = require("../Base/Common/DataReponse");
const CustomException_1 = require("../Base/Utils/CustomException");
const OrderRequest_1 = require("../Dtos/Orders/Request/OrderRequest");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderService = orderService;
    }
    async getAllOrder() {
        try {
            const response = await this.orderService.getAllOrder();
            return new DataReponse_1.DataResponse(200, "Đã tải dữ liệu thành công", response);
        }
        catch (e) {
            if (e instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(e.message);
            }
            throw new CustomException_1.InternalServerErrorException(e.message);
        }
    }
    async getOneOrder(orderKey) {
        try {
            const response = await this.orderService.getOneOrder(orderKey);
            return new DataReponse_1.DataResponse(200, "Đã tải dữ liệu thành công", response);
        }
        catch (e) {
            if (e instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(e.message);
            }
            throw new CustomException_1.InternalServerErrorException(e.message);
        }
    }
    async updateStsOrder(orderKey, status) {
        try {
            await this.orderService.updateStsOrder(orderKey, status);
            return new DataReponse_1.DataResponse(200, "Xóa dữ liệu thành công", null);
        }
        catch (e) {
            if (e instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(e.message);
            }
            throw new CustomException_1.InternalServerErrorException(e.message);
        }
    }
    async createOrder(request) {
        try {
            const response = await this.orderService.createOrder(request);
            return new DataReponse_1.DataResponse(200, "Tạo đơn hàng thành công", response);
        }
        catch (e) {
            throw new CustomException_1.InternalServerErrorException(e.message);
        }
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Get)('getAllOrder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllOrder", null);
__decorate([
    (0, common_1.Get)(':orderKey'),
    __param(0, (0, common_1.Param)('orderKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOneOrder", null);
__decorate([
    (0, common_1.Patch)(':orderKey/:status'),
    __param(0, (0, common_1.Param)('orderKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateStsOrder", null);
__decorate([
    (0, common_1.Post)('createOrder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderRequest_1.OrderRequest]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __param(0, (0, common_1.Inject)("IOrderService")),
    __metadata("design:paramtypes", [Object])
], OrderController);
//# sourceMappingURL=OrderController.js.map