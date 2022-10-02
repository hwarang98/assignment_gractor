export interface ApiRequest {
  targetFacilities: object;
  device: object;
  // install: number;
  // stateNotification: number;
  // event: number;
}

export const apiData: ApiRequest = {
  targetFacilities: {
    install: 320,
    stateNotification: 3,
    event: 5,
  },

  device: {
    install: 320,
    stateNotification: 3,
    event: 5,
  },
};
