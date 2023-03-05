import { HttpException, HttpStatus } from '@nestjs/common';

interface ApplicationErrorOptions {
  message?: string;
  statusCode?: number;
  domain?: string;
  error?: any;
}

export default class ApplicationError extends HttpException {
  public name = 'Application error';

  public domain: string;

  public message: string;

  public statusCode: number;

  public error?: any;

  constructor(options: ApplicationErrorOptions) {
    super(
      options.message,
      options.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR,
    );
    this.message = options.message ?? 'Internal server error';
    this.domain = options.domain ?? 'Application';
    this.error = options.error;
  }
}
