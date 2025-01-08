import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidDataException extends HttpException {
  constructor(message: string = 'Invalid data', statusCode: HttpStatus = HttpStatus.BAD_REQUEST) {
    super({ statusCode, message }, statusCode);
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(message: string = 'Internal server error', statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR) {
    super({ statusCode, message }, statusCode);
  }
}

export class DataNotFoundException extends HttpException {
  constructor(message: string = 'Data not found', statusCode: HttpStatus = HttpStatus.NOT_FOUND) {
    super({ statusCode, message }, statusCode);
  }
}

export class DataExistException extends HttpException {
  constructor(message: string = 'Data already exists', statusCode: HttpStatus = HttpStatus.CONFLICT) {
    super({ statusCode, message }, statusCode);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string = 'Unauthorized', statusCode: HttpStatus = HttpStatus.UNAUTHORIZED) {
    super({ statusCode, message }, statusCode);
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string = 'Forbidden', statusCode: HttpStatus = HttpStatus.FORBIDDEN) {
    super({ statusCode, message }, statusCode);
  }
}

export class ThirdPartyApiException extends HttpException {
  constructor(message: string = 'Third-party API error', statusCode: HttpStatus = HttpStatus.BAD_GATEWAY) {
    super({ statusCode, message }, statusCode);
  }
}