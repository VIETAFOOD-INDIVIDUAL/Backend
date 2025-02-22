export declare class DataResponse<T> {
    statusCode: number;
    message: string;
    data: T;
    constructor(statusCode: number, message: string, data: T);
}
