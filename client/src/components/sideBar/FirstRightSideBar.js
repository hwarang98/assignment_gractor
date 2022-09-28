import React from "react";
import { BsDot } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./FirstRightSideBar.css";

function firstRightSideBar() {
  return (
    <div className="RightSideBar">
      <div className="first-rectangle"></div>

      {/* 설치 위치 */}
      <span className="rocation-title">고척중학교 교차로</span>
      <span className="rocation-sub-title">
        서울특별시 구로구 고척동 76-224
      </span>

      <div className="rocate-title-side-bar"></div>
      <div className="rocate-title-bottom-bar"></div>

      <div className="installation-location-box">
        <span className="installation-location-rectangle"></span>
        <span className="installation-location-text">설치위치</span>
      </div>

      <div className="latitude-box">
        <span className="latitude-text">위도</span>
      </div>

      <div className="latitude-num-box">
        <span className="latitude-num-text">37.49999581324621</span>
      </div>

      <div className="longitude-box">
        <span className="longitude-text">경도</span>
      </div>

      <div className="longitude-num-box">
        <span className="longitude-num-text">126.86281102222206</span>
      </div>

      <div className="height-box">
        <span className="height-text">고도(m)</span>
      </div>

      <div className="height-num-box">
        <span className="height-num-text">2.60</span>
      </div>

      <div className="rocate-box-bar">
        <div className="first-rocate-box-bar" />
        <div className="second-rocate-box-bar" />
        <div className="third-rocate-box-bar" />
      </div>

      <div className="device-state-text-box">
        <span className="device-state-text-rectangle" />
        <span className="device-state-text">디바이스 상태</span>
      </div>

      {/* 디바이스 상태 */}
      <div className="device-state-info-rectangle" />
      <span className="device-name-title">단말명칭</span>
      <span className="device-name">OOO정보통신</span>

      <span className="device-installation-day-title">설치일</span>
      <span className="device-installation-day">2018.11.25</span>

      <span className="device-operation-state-title">단말 운영상태</span>
      <span className="device-operation-state">정상</span>

      <span className="device-communication-state-title">단말 통신상태</span>
      <span className="device-communication-state">정상</span>

      <div className="first-device-state-box-line" />
      <div className="second-device-state-box-line" />
      <div className="third-device-state-box-line" />

      {/* 교차로 알리미 서비스 */}
      <div className="rocation-box-out-line" />
      <div className="recation-service-box">
        <div className="recation-service-box-rectangle" />
        <div className="button-box">
          <AiOutlineClose className="recation-service-delete-button" />
        </div>
        <div className="recation-service-text-box">
          <div className="recation-service-text-title">
            교차로 알리미 서비스
          </div>
          <div className="recation-service-text-sub-title">
            어린이 보호 구역과 교차로 지역에 진입하는 차량 속도를 AI/IoT 기술을
            활용하여 보행자 및 운전자 동시에 알려주는 사고예방 안전서비스
            입니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default firstRightSideBar;
