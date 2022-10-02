import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SecondRightSideBar.css";

function SecondRightSideBar() {
  // console.log(dangerServiceData.device[0]);
  // 대상시설 api요청 저장
  const [
    dangerTargetFacilitiesServiceData,
    setDangerServiceTargetFacilitiesData,
  ] = useState([]);
  const [
    rocationTargetFacilitiesServiceData,
    setRocationTargetFacilitiesServiceData,
  ] = useState([]);
  const [
    turnRightTargetFacilitiesServiceData,
    setTurnRightTargetFacilitiesServiceData,
  ] = useState([]);

  // 단말기 api 요청
  const [dangerDeviceServiceData, setDangerServiceDeviceData] = useState([]);
  const [rocationDeviceServiceData, setRocationDeviceServiceData] = useState(
    []
  );
  const [turnRightDeviceServiceData, setTurnRightDeviceServiceData] = useState(
    []
  );
  // 위험 시설물 대상시설 api 요청

  const dangerService = async () => {
    const data = await axios.post(
      "http://localhost:8000/api/notificationService",
      {
        dangerNotificationService: "dangerNotificationService",
      }
    );
    setDangerServiceTargetFacilitiesData(data.data.apiData.targetFacilities);
    setDangerServiceDeviceData(data.data.apiData.device);
  };

  // 교차로 api 요청
  const rocationService = async () => {
    const data = await axios.post(
      "http://localhost:8000/api/notificationService",
      {
        rocationNotificationService: "rocationNotificationService",
      }
    );
    setRocationTargetFacilitiesServiceData(data.data.apiData.targetFacilities);
    setRocationDeviceServiceData(data.data.apiData.device);
  };

  // 우회전 api 요청
  const turnRightService = async () => {
    let data = await axios.post(
      "http://localhost:8000/api/notificationService",
      {
        turnRightNotificationService: "turnRightNotificationService",
      }
    );
    setTurnRightTargetFacilitiesServiceData(data.data.apiData.targetFacilities);
    setTurnRightDeviceServiceData(data.data.apiData.device);
  };

  useEffect(() => {
    dangerService();
    rocationService();
    turnRightService();
  }, []);

  // 위험시설물 대상시설 api data
  // const dangerServicetargetFacilitiesInstall =
  //   dangerServiceData.targetFacilities[0].install;
  // const dangerServicetargetFacilitiesStateNotification =
  //   dangerServiceData.targetFacilities.stateNotification;
  // const dangerServicetargetFacilitiesEvent =
  //   dangerServiceData.targetFacilities.event;

  // 위험시설물 단말기 api Data
  // const dangerServicedeviceInstall = dangerServiceData.device.install;
  // const dangerServicedeviceStateNotification =
  //   dangerServiceData.device.stateNotification;
  // const dangerServicedeviceEvent = dangerServiceData.device.event;

  // // 교차로 대상시설 api Data
  // const rocationFacilitiesInstall =
  //   rocationServiceData.targetFacilities.install;
  // const rocationFacilitiesStateNotification =
  //   rocationServiceData.targetFacilities.stateNotification;
  // const rocationFacilitiesEvent = rocationServiceData.targetFacilities.event;

  // // 교차로 단말기시설 api Data
  // const rocationDeviceInstall = rocationServiceData.device.install;
  // const rocationDeviceStateNotification =
  //   rocationServiceData.device.stateNotification;
  // const rocationDeviceEvent = rocationServiceData.device.event;

  // // 우회전 대상시설 api Data
  // const turnRightFacilitiesInstall =
  //   turnRightServiceData.targetFacilities.install;
  // const turnRightFacilitiesStateNotification =
  //   turnRightServiceData.targetFacilities.stateNotification;
  // const turnRightFacilitiesEvent = turnRightServiceData.targetFacilities.event;

  // // 우회전 단말기시설 api Data
  // const turnRightDeviceInstall = turnRightServiceData.device.install;
  // const turnRightDeviceStateNotification =
  //   turnRightServiceData.device.stateNotification;
  // const turnRightDeviceEvent = turnRightServiceData.device.event;
  return (
    <div className="SecondRightSideBar">
      <div className="second-right-rectangle" />

      {/* 대상시설 및 단말 운영 현황 */}
      <div className="second-right-rectangle-title-box">
        <div className="second-right-rectangle-title-text-box">
          <span className="second-right-rectangle-title-text">
            대상시설 및 단말 운영현황
          </span>
          <div className="second-right-rectangle-title-text-rectangle" />
        </div>
        <div className="second-right-rectangle-title-rectangle" />
        <div className="second-right-rectangle-title-rectangle-mini" />
      </div>

      {/* 설치 */}
      <div className="install-box">
        <div className="install-box-text">설치</div>
        <div className="install-box-rectangle" />
      </div>

      {/* 상태알림 */}
      <div className="state-notification">
        <div className="state-notification-text">상태알림</div>
        <div className="state-notification-rectangle" />
      </div>

      {/* 이벤트 */}
      <div className="event-box">
        <div className="event-text">이벤트</div>
        <div className="event-rectangle" />
      </div>

      {/* 위험시설물 예경보 알림 서비스 */}
      <div className="danger-notification-service">
        <div className="danger-notification-service-line" />
        <div className="danger-notification-service-icon" />
        <div className="danger-notification-service-text">
          위험시설물 예경보 알림 서비스
        </div>
        {/* 대상시설 */}
        <div className="danger-notification-service-target-box">
          <div className="danger-notification-service-target-text">
            대상시설
          </div>
          <div className="danger-notification-service-target-install-number">
            {/* {test} */}
            {dangerTargetFacilitiesServiceData.install}
          </div>
          <div className="danger-notification-service-target-number-text">
            개소
          </div>
          <div className="danger-notification-service-target-state-number">
            {dangerTargetFacilitiesServiceData.stateNotification}
          </div>
          <div className="danger-notification-service-target-event-number">
            {dangerTargetFacilitiesServiceData.event}
          </div>
        </div>
        {/* 단말기 */}
        <div className="danger-notification-service-device-box">
          <div className="danger-notification-service-device-text">단말기</div>
          <div className="danger-notification-service-device-install-number">
            {dangerDeviceServiceData.install}
          </div>
          <div className="danger-notification-service-device-number-text">
            개
          </div>
          <div className="danger-notification-service-device-state-number">
            {dangerDeviceServiceData.stateNotification}
          </div>
          <div className="danger-notification-service-device-event-number">
            {dangerDeviceServiceData.event}
          </div>
        </div>
      </div>

      {/* 교차로 알림 서비스 */}
      <div className="rocation-notification-service">
        <div className="rocation-notification-service-line" />
        <div className="rocation-notification-service-icon" />
        <div className="rocation-notification-service-text">
          교차로 알림 서비스
        </div>
        {/* 대상시설 */}
        <div className="rocation-notification-service-target-box">
          <div className="rocation-notification-service-target-text">
            대상시설
          </div>
          <div className="rocation-notification-service-target-install-number">
            {rocationTargetFacilitiesServiceData.install}
          </div>
          <div className="rocation-notification-service-target-number-text">
            개소
          </div>
          <div className="rocation-notification-service-target-state-number">
            {rocationTargetFacilitiesServiceData.stateNotification}
          </div>
          <div className="rocation-notification-service-target-event-number">
            {rocationTargetFacilitiesServiceData.event}
          </div>
        </div>
        {/* 단말기 */}
        <div className="rocation-notification-service-device-box">
          <div className="rocation-notification-service-device-text">
            단말기
          </div>
          <div className="rocation-notification-service-device-install-number">
            {rocationDeviceServiceData.install}
          </div>
          <div className="rocation-notification-service-device-number-text">
            개
          </div>
          <div className="rocation-notification-service-device-state-number">
            {rocationDeviceServiceData.stateNotification}
          </div>
          <div className="rocation-notification-service-device-event-number">
            {rocationDeviceServiceData.event}
          </div>
        </div>
      </div>

      {/* 우회전 알리미 서비스 */}
      <div className="turn-right-notification-service">
        <div className="turn-right-notification-service-line" />
        <div className="turn-right-notification-service-icon" />
        <div className="turn-right-notification-service-text">
          우회전 알리미 서비스
        </div>
        {/* 대상시설 */}
        <div className="turn-right-notification-service-target-box">
          <div className="turn-right-notification-service-target-text">
            대상시설
          </div>
          <div className="turn-right-notification-service-target-install-number">
            {turnRightTargetFacilitiesServiceData.install}
          </div>
          <div className="turn-right-notification-service-target-number-text">
            개소
          </div>
          <div className="turn-right-notification-service-target-state-number">
            {turnRightTargetFacilitiesServiceData.stateNotification}
          </div>
          <div className="turn-right-notification-service-target-event-number">
            {turnRightTargetFacilitiesServiceData.event}
          </div>
        </div>
        {/* 단말기 */}
        <div className="turn-right-notification-service-device-box">
          <div className="turn-right-notification-service-device-text">
            단말기
          </div>
          <div className="turn-right-notification-service-device-install-number">
            {turnRightDeviceServiceData.install}
          </div>
          <div className="turn-right-notification-service-device-number-text">
            개
          </div>
          <div className="turn-right-notification-service-device-state-number">
            {turnRightDeviceServiceData.stateNotification}
          </div>
          <div className="turn-right-notification-service-device-event-number">
            {turnRightDeviceServiceData.event}
          </div>
        </div>
      </div>

      {/* 알림 서비스 구분 선 */}
      <div className="second-right-rectangle-first-line" />
      <div className="second-right-rectangle-second-line" />
      <div className="second-right-rectangle-tird-line" />
      <div className="second-right-rectangle-fourth-line" />

      {/* 페이지 동그라미 */}
      <div className="page-icon-box">
        <div className="fisrt-page-icon" />
        <div className="second-page-icon" />
        <div className="third-page-icon" />
      </div>
    </div>
  );
}

export default SecondRightSideBar;
