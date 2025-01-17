import { Inject, Injectable } from "@nestjs/common";
import e from "express";
import { DataNotFoundException, InternalServerErrorException } from "src/Base/Utils/CustomException";
import { CustomerInfoRequest } from "src/Dtos/CustomerInfo/Request/CustomerInfoRequest";
import { CustomerInfoResponse } from "src/Dtos/CustomerInfo/Response/CustomerInfoResponse";
import { ICustomerInfoRepository } from "src/Repositories/IRepository/ICustomerInfoRepository";
import { ICustomerInfoService } from "../IService/ICustomerInfoService";

@Injectable()
export class CustomerInfoService implements ICustomerInfoService {
    constructor(
        @Inject('ICustomerInfoRepository')
        private readonly customerInfoRepository: ICustomerInfoRepository) {
        this.customerInfoRepository = customerInfoRepository;
    }
    async getAllCustomerInfo(): Promise<CustomerInfoResponse[]> {
        try {
            const getAllCustomerInfo = await this.customerInfoRepository.getAllCustomerInfo();
            if (getAllCustomerInfo === null) {
                throw new DataNotFoundException("Không tìm thấy thông tin khách hàng !");
            }
            const response: CustomerInfoResponse[] = [...getAllCustomerInfo];
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async getOneCustomerInfo(customerKey: string): Promise<CustomerInfoResponse> {
        try {
            const getAllCustomerInfo = await this.customerInfoRepository.getOneCustomerInfo(customerKey);
            if (getAllCustomerInfo === null) {
                throw new DataNotFoundException("Không tìm thấy thông tin khách hàng !");
            }
            const response: CustomerInfoResponse = {
                ...getAllCustomerInfo
            } as CustomerInfoResponse;
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async deleteCustomerInfo(customerKey: string): Promise<void> {
        try {
            await this.customerInfoRepository.deleteCustomerInfo(customerKey);
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
    async createCustomerInfo(request : CustomerInfoRequest) : Promise<CustomerInfoResponse> {
        try {
            var result = await this.customerInfoRepository.createCustomerInfo(request);
            if (result === null) {
                throw new DataNotFoundException("Không tạo được thông tin khách hàng !");
            }
            const response: CustomerInfoResponse = {
                ...result
            } as CustomerInfoResponse;
            return response;
        } catch (error) {
            if (error instanceof DataNotFoundException) {
                throw new DataNotFoundException(error.message);
            }
            throw new InternalServerErrorException(error.message);
        }
    }
}