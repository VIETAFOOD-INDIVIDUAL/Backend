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
exports.CustomerInfoService = void 0;
const common_1 = require("@nestjs/common");
const CustomException_1 = require("../../Base/Utils/CustomException");
let CustomerInfoService = class CustomerInfoService {
    constructor(customerInfoRepository) {
        this.customerInfoRepository = customerInfoRepository;
        this.customerInfoRepository = customerInfoRepository;
    }
    async getAllCustomerInfo() {
        try {
            const getAllCustomerInfo = await this.customerInfoRepository.getAllCustomerInfo();
            if (getAllCustomerInfo === null) {
                throw new CustomException_1.DataNotFoundException("Không tìm thấy thông tin khách hàng !");
            }
            const response = [...getAllCustomerInfo];
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async getOneCustomerInfo(customerKey) {
        try {
            const getAllCustomerInfo = await this.customerInfoRepository.getOneCustomerInfo(customerKey);
            if (getAllCustomerInfo === null) {
                throw new CustomException_1.DataNotFoundException("Không tìm thấy thông tin khách hàng !");
            }
            const response = {
                ...getAllCustomerInfo
            };
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async deleteCustomerInfo(customerKey) {
        try {
            await this.customerInfoRepository.deleteCustomerInfo(customerKey);
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
    async createCustomerInfo(request) {
        try {
            var result = await this.customerInfoRepository.createCustomerInfo(request);
            if (result === null) {
                throw new CustomException_1.DataNotFoundException("Không tạo được thông tin khách hàng !");
            }
            const response = {
                ...result
            };
            return response;
        }
        catch (error) {
            if (error instanceof CustomException_1.DataNotFoundException) {
                throw new CustomException_1.DataNotFoundException(error.message);
            }
            throw new CustomException_1.InternalServerErrorException(error.message);
        }
    }
};
exports.CustomerInfoService = CustomerInfoService;
exports.CustomerInfoService = CustomerInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ICustomerInfoRepository')),
    __metadata("design:paramtypes", [Object])
], CustomerInfoService);
//# sourceMappingURL=CustomerInfoService.js.map