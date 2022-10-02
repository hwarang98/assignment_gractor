import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApisService } from './apis.service';
import { ApiDto } from './dto/apis.dto';

@Controller('api')
export class ApisController {
  constructor(private readonly apiService: ApisService) {}
  @Post('notificationService')
  async targetApi(@Body() data: string[]) {
    console.log('data: ', data);
    return await this.apiService.targetFacilities(data);
  }
}
