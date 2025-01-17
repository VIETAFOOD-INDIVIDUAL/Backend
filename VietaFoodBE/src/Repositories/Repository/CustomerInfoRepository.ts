import { CustomerInformation, PrismaClient } from "@prisma/client";
import { ICustomerInfoRepository } from "../IRepository/ICustomerInfoRepository";
import { InternalServerErrorException } from "src/Base/Utils/CustomException";
import { CustomerInfoRequest } from "src/Dtos/CustomerInfo/Request/CustomerInfoRequest";
import { CustomerInfoResponse } from "src/Dtos/CustomerInfo/Response/CustomerInfoResponse";
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerInfoRepository implements ICustomerInfoRepository {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    
    async getAllCustomerInfo(): Promise<CustomerInformation[]> {
        try {
            const customerInfos = await this.prisma.customerInformation.findMany();
            return customerInfos;
        } catch (e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }

    async getOneCustomerInfo(customerKey: string): Promise<CustomerInformation> {
        try {
            const customerInfo = await this.prisma.customerInformation.findFirst({where: {customerInfoKey: customerKey}});
            return customerInfo;
        } catch (e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }
    
    async deleteCustomerInfo(customerKey: string): Promise<void> {
        try {
            const customerInfo = await this.prisma.customerInformation.findFirst({where: {customerInfoKey: customerKey}});
            if (!customerInfo) {
                throw new InternalServerErrorException("Không tìm thấy thông tin khách hàng !");
            }
            await this.prisma.customerInformation.delete({where: {customerInfoKey: customerKey}});
        } catch (e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }

    async createCustomerInfo(request: CustomerInfoRequest): Promise<CustomerInformation> {
        try {
            const result = await this.prisma.customerInformation.create(
                {data: {
                    ...request,
                    customerInfoKey: `CUS_${uuidv4()}`,
                }}
            );
            return result;
        }catch(e) {
            throw new InternalServerErrorException("Lỗi hệ thống !")
        }
    }
}