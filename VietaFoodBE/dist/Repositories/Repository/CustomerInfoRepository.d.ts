import { CustomerInformation } from "@prisma/client";
import { ICustomerInfoRepository } from "../IRepository/ICustomerInfoRepository";
import { CustomerInfoRequest } from "src/Dtos/CustomerInfo/Request/CustomerInfoRequest";
export declare class CustomerInfoRepository implements ICustomerInfoRepository {
    private prisma;
    constructor();
    getAllCustomerInfo(): Promise<CustomerInformation[]>;
    getOneCustomerInfo(customerKey: string): Promise<CustomerInformation>;
    deleteCustomerInfo(customerKey: string): Promise<void>;
    createCustomerInfo(request: CustomerInfoRequest): Promise<CustomerInformation>;
}
