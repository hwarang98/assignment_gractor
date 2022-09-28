import React from "react";
import "./SecondRightSideBar.css";

function SecondRightSideBar() {
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
            320
          </div>
          <div className="danger-notification-service-target-number-text">
            개소
          </div>
          <div className="danger-notification-service-target-state-number">
            3
          </div>
          <div className="danger-notification-service-target-event-number">
            5
          </div>
        </div>
        {/* 단말기 */}
        <div className="danger-notification-service-device-box">
          <div className="danger-notification-service-device-text">단말기</div>
          <div className="danger-notification-service-device-install-number">
            632
          </div>
          <div className="danger-notification-service-device-number-text">
            개
          </div>
          <div className="danger-notification-service-device-state-number">
            8
          </div>
          <div className="danger-notification-service-device-event-number">
            12
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
            320
          </div>
          <div className="rocation-notification-service-target-number-text">
            개소
          </div>
          <div className="rocation-notification-service-target-state-number">
            3
          </div>
          <div className="rocation-notification-service-target-event-number">
            5
          </div>
        </div>
        {/* 단말기 */}
        <div className="rocation-notification-service-device-box">
          <div className="rocation-notification-service-device-text">
            단말기
          </div>
          <div className="rocation-notification-service-device-install-number">
            632
          </div>
          <div className="rocation-notification-service-device-number-text">
            개
          </div>
          <div className="rocation-notification-service-device-state-number">
            8
          </div>
          <div className="rocation-notification-service-device-event-number">
            12
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
            320
          </div>
          <div className="turn-right-notification-service-target-number-text">
            개소
          </div>
          <div className="turn-right-notification-service-target-state-number">
            3
          </div>
          <div className="turn-right-notification-service-target-event-number">
            5
          </div>
        </div>
        {/* 단말기 */}
        <div className="turn-right-notification-service-device-box">
          <div className="turn-right-notification-service-device-text">
            단말기
          </div>
          <div className="turn-right-notification-service-device-install-number">
            632
          </div>
          <div className="turn-right-notification-service-device-number-text">
            개
          </div>
          <div className="turn-right-notification-service-device-state-number">
            8
          </div>
          <div className="turn-right-notification-service-device-event-number">
            12
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
