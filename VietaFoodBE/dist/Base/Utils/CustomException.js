"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThirdPartyApiException = exports.ForbiddenException = exports.UnauthorizedException = exports.DataExistException = exports.DataNotFoundException = exports.InternalServerErrorException = exports.InvalidDataException = void 0;
const common_1 = require("@nestjs/common");
class InvalidDataException extends common_1.HttpException {
    constructor(message = 'Invalid data', statusCode = common_1.HttpStatus.BAD_REQUEST) {
        super({ statusCode, message }, statusCode);
    }
}
exports.InvalidDataException = InvalidDataException;
class InternalServerErrorException extends common_1.HttpException {
    constructor(message = 'Internal server error', statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        super({ statusCode, message }, statusCode);
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
class DataNotFoundException extends common_1.HttpException {
    constructor(message = 'Data not found', statusCode = common_1.HttpStatus.NOT_FOUND) {
        super({ statusCode, message }, statusCode);
    }
}
exports.DataNotFoundException = DataNotFoundException;
class DataExistException extends common_1.HttpException {
    constructor(message = 'Data already exists', statusCode = common_1.HttpStatus.CONFLICT) {
        super({ statusCode, message }, statusCode);
    }
}
exports.DataExistException = DataExistException;
class UnauthorizedException extends common_1.HttpException {
    constructor(message = 'Unauthorized', statusCode = common_1.HttpStatus.UNAUTHORIZED) {
        super({ statusCode, message }, statusCode);
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends common_1.HttpException {
    constructor(message = 'Forbidden', statusCode = common_1.HttpStatus.FORBIDDEN) {
        super({ statusCode, message }, statusCode);
    }
}
exports.ForbiddenException = ForbiddenException;
class ThirdPartyApiException extends common_1.HttpException {
    constructor(message = 'Third-party API error', statusCode = common_1.HttpStatus.BAD_GATEWAY) {
        super({ statusCode, message }, statusCode);
    }
}
exports.ThirdPartyApiException = ThirdPartyApiException;
//# sourceMappingURL=CustomException.js.map