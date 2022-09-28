import React from "react";
import {
  AiFillPlayCircle,
  AiOutlineBulb,
  AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";
import { FcRefresh, FcUpRight } from "react-icons/fc";
import { FiCornerUpRight } from "react-icons/fi";
import { TbCornerUpRight } from "react-icons/tb";
import {
  MdOutlineNordicWalking,
  MdFaceRetouchingNatural,
  MdOutlineCancel,
} from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import "./ServiceBar.css";

function ServiceBar() {
  return (
    <div className="serviceBar">
      <div className="container">
        <div className="cancel-button">
          <div className="cancel-button-icon-box">
            <AiOutlineClose className="cancel-button-icon" size="17" />
          </div>
        </div>
        {/* 재생시간 */}
        <div className="paly-time-box">
          <HiOutlineClock
            className="play-time-icon"
            // size="30"
            color="#697077"
          />

          <div className="play-time">
            <span className="play-time-now">재생시간</span>
            <div className="min-box">
              <span className="min-box-text">10</span>
            </div>
            <span className="min-text">분</span>
          </div>

          <div className="save-button">
            <span className="save-button-text">저장</span>
          </div>

          <div className="gap"></div>
        </div>

        <div className="paly-button">
          <span className="play-button-text">도시 서비스 선택</span>
          <AiFillPlayCircle
            className="play-button-icon"
            size="30"
            color="#027FC2"
          />
        </div>

        <div className="hazardous-facilities-group">
          <HiOutlineOfficeBuilding
            className="hazardous-facilities-icon"
            color="#999999"
            size="32"
          />
          <span className="hazardous-facilities-text">
            위험시설물 예・경보 알림 서비스
          </span>
        </div>

        <div className="intersection-group">
          <FcRefresh
            className="intersection-text-icon"
            size="30"
            color="#027FC2"
          />
          <span className="intersection-text">교차로 알리미 서비스</span>
        </div>

        <div className="turnRight-group">
          <TbCornerUpRight
            className="turnRight-text-icon"
            size="30"
            color="#697077"
          />
          <span className="turnRight-text">우회전 알리미 서비스</span>
        </div>

        <div className="one-old-man-group">
          <MdOutlineNordicWalking
            className="one-old-man-text-icon"
            size="30"
            color="#999999"
          />
          <span className="one-old-man-text">홀몸어르신 안심 서비스</span>
        </div>

        <div className="day-care-center-group">
          <MdFaceRetouchingNatural
            className="day-care-center-text-icon"
            size="30"
            color="#999999"
          />
          <span className="day-care-center-text">어린이집 알림 서비스</span>
        </div>

        <div className="special-school-group">
          <FaWheelchair
            className="special-school-text-icon"
            size="30"
            color="#999999"
          />
          <span className="special-school-text">특수학교 알림 서비스</span>
        </div>

        <div className="smart-security-light-group">
          <AiOutlineBulb
            className="smart-security-light-text-icon"
            size="30"
            color="#999999"
          />
          <span className="smart-security-light-text">
            스마트 보안등 서비스
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServiceBar;
