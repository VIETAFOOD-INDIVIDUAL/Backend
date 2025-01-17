import { CustomerInformation } from "@prisma/client";
export interface ICustomerInfoRepository {
    getAllCustomerInfo(): Promise<CustomerInformation[]>;
    getOneCustomerInfo(customerKey: string): Promise<CustomerInformation>;
    deleteCustomerInfo(customerKey: string): Promise<void>;
    createCustomerInfo(request: any): Promise<CustomerInformation>;
}
