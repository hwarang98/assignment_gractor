import { Injectable } from '@nestjs/common';
import { ApiRequest } from './models/apis.model';

@Injectable()
export class ApisService {
  // 대상시설
  async targetFacilities(data) {
    const apiData: ApiRequest = {
      install: 320,
      stateNotification: 3,
      event: 5,
    };
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
