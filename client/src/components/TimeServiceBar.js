import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import "./TimeServiceBar.css";

function TimeServiceBar() {
  return (
    <div className="timeServiceBar">
      {/* 현재시각 */}
      <div className="now-time-service-box">
        <span className="now-time-text">현재시각</span>
        <span className="now-time">15:25:43</span>
        <span className="now-time-date">2021.03.26</span>
      </div>

      {/* 날씨 */}
      <div className="now-weather-box">
        <span className="now-weather-text">날씨</span>
        <span className="now-weather-num">21</span>
        <span className="now-weather-degree">℃</span>
        <div className="weather-icon-box">
          <TiWeatherPartlySunny className="weather-icon" />
        </div>
      </div>

      <div className="fine-dust-box">
        <span className="fine-dust-text">PM2.5</span>
        <span className="fine-dust-num">27</span>
        <span className="fine-dust-degree">좋음</span>
      </div>

      <div className="t-icon-box">
        <span className="t-icon-text">T</span>
      </div>

      <div className="timeServiceBar-first-boundary-line" />
      <div className="timeServiceBar-third-boundary-line" />
      <div className="timeServiceBar-second-boundary-line" />
    </div>
  );
}

export default TimeServiceBar;
