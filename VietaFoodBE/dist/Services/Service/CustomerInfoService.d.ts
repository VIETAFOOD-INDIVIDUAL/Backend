import { CustomerInfoRequest } from "src/Dtos/CustomerInfo/Request/CustomerInfoRequest";
import { CustomerInfoResponse } from "src/Dtos/CustomerInfo/Response/CustomerInfoResponse";
import { ICustomerInfoRepository } from "src/Repositories/IRepository/ICustomerInfoRepository";
import { ICustomerInfoService } from "../IService/ICustomerInfoService";
export declare class CustomerInfoService implements ICustomerInfoService {
    private readonly customerInfoRepository;
    constructor(customerInfoRepository: ICustomerInfoRepository);
    getAllCustomerInfo(): Promise<CustomerInfoResponse[]>;
    getOneCustomerInfo(customerKey: string): Promise<CustomerInfoResponse>;
    deleteCustomerInfo(customerKey: string): Promise<void>;
    createCustomerInfo(request: CustomerInfoRequest): Promise<CustomerInfoResponse>;
}
