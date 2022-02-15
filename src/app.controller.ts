import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'search' })
  getHello(): string {
    const logger = new Logger('Logger');
    logger.log(`I am here`);
    return this.appService.getLogger();
  }
}
