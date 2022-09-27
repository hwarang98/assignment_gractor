import React, { useRef, useEffect, useState } from "react";
import { FirstChart, SecondChart, ThirdChart } from "..";
import { AiOutlineRight } from "react-icons/ai";
import * as echarts from "echarts";
import "./LeftSide.css";

function LeftSide() {
  return (
    <div className="left-bar">
      <div className="left-bar-container"></div>

      <div className="widget-title">
        <div className="text-box">
          <div className="text">스마트 도시 서비스 주요 현황</div>
          <div className="text-bottom"></div>
        </div>
        <div className="widget-short"></div>
        <div className="widget-bottom-long"></div>
      </div>

      <div className="chart-first">
        <div className="chart-first-rectangle"></div>
        <span className="chart-first-text">
          위험시설물 예・경보 알림 서비스
        </span>
        <span className="chart-first-in-text">시설물등급</span>
        <FirstChart />
      </div>

      <div className="chart-second">
        <div className="chart-second-rectangle"></div>
        <span className="chart-second-text">홀몸어르신 안심 서비스</span>
        <span className="chart-second-in-text">어르신위험등급</span>
        <SecondChart />
      </div>

      <div className="chart-third">
        <div className="chart-third-rectangle"></div>
        <span className="chart-third-text">어린이집 알림 서비스</span>
        <span className="chart-third-in-text">단말상태총149개</span>
        <ThirdChart />
      </div>

      <div className="locate">
        <span className="Guro-gu">구로구</span>
        <AiOutlineRight className="Guro-gu-icon" />
        <span className="Guro-gu-all">전체</span>
      </div>
    </div>
  );
}

export default LeftSide;
