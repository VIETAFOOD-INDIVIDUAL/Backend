import { CustomerInfoRequest } from "src/Dtos/CustomerInfo/Request/CustomerInfoRequest"
import { CustomerInfoResponse } from "src/Dtos/CustomerInfo/Response/CustomerInfoResponse"

export interface ICustomerInfoService {
    getAllCustomerInfo(): Promise<CustomerInfoResponse[]>
    getOneCustomerInfo(customerKey: string): Promise<CustomerInfoResponse>
    deleteCustomerInfo(customerKey: string): Promise<void>
    createCustomerInfo(request : CustomerInfoRequest) : Promise<CustomerInfoResponse>
}