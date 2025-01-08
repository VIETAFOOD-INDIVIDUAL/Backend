import { HttpException, HttpStatus } from '@nestjs/common';
export declare class InvalidDataException extends HttpException {
    constructor(message?: string, statusCode?: HttpStatus);
}
export declare class InternalServerErrorException extends HttpException {
    constructor(message?: string, statusCode?: HttpStatus);
}
export declare class DataNotFoundException extends HttpException {
    constructor(message?: string, statusCode?: HttpStatus);
}
export declare class DataExistException extends HttpException {
    constructor(message?: string, statusCode?: HttpStatus);
}
export declare class UnauthorizedException extends HttpException {
    constructor(message?: string, statusCode?: HttpStatus);
}
export declare class ForbiddenException extends HttpException {
    constructor(message?: string, statusCode?: HttpStatus);
}
export declare class ThirdPartyApiException extends HttpException {
    constructor(message?: string, statusCode?: HttpStatus);
}
