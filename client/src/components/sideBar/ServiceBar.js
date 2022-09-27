import React from "react";
import { AiFillPlayCircle, AiOutlineBulb } from "react-icons/ai";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FcRefresh, FcUpRight } from "react-icons/fc";
import { FiCornerUpRight } from "react-icons/fi";
import { TbCornerUpRight } from "react-icons/tb";
import {
  MdOutlineNordicWalking,
  MdFaceRetouchingNatural,
} from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import "./ServiceBar.css";

function ServiceBar() {
  return (
    <div className="serviceBar">
      <div className="container">
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
          <MdOutlineNordicWalking className="one-old-man-text-icon" />
          <span className="one-old-man-text">홀몸어르신 안심 서비스</span>
        </div>

        <div className="day-care-center-group">
          <span className="day-care-center-text-icon"></span>
          <MdFaceRetouchingNatural className="day-care-center-text-icon" />
          <span className="day-care-center-text">어린이집 알림 서비스</span>
        </div>

        <div className="special-school-group">
          <FaWheelchair className="special-school-text-icon" />
          <span className="special-school-text">특수학교 알림 서비스</span>
        </div>

        <div className="smart-security-light-group">
          <AiOutlineBulb className="smart-security-light-text-icon" />
          <span className="smart-security-light-text">
            스마트 보안등 서비스
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServiceBar;
