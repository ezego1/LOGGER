import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger = new Logger('Logger');
  getLogger(): string {
    this.logger.log(`Request got here`);
    return 'Hello Logger!';
  }
}
