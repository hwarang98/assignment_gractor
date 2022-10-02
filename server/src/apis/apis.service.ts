import { Injectable } from '@nestjs/common';
import { apiData } from './models/apis.model';

@Injectable()
export class ApisService {
  // 대상시설
  async targetFacilities(data) {
    console.log('apiData: ', apiData);
    const {
      dangerNotificationService,
      rocationNotificationService,
      turnRightNotificationService,
    } = data;

    if (dangerNotificationService) {
      return {
        apiData,
      };
    }
    if (rocationNotificationService) {
      return {
        apiData,
      };
    }
    if (turnRightNotificationService) {
      return {
        apiData,
      };
    }
  }
}
