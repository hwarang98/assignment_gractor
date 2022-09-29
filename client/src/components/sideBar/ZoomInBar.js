import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./ZoomInBar.css";

function ZoomInBar() {
  return (
    <div className="zoomInBar">
      <div className="zoom-in-rectangle" />
      <AiOutlinePlus className="zoom-in-plus-icon" />
      <div className="zoom-in-first-line" />
      <div className="zoom-in-long-bar" />
      <div className="zoom-in-long-bar-color" />
      <div className="zoom-in-long-bar-rectangle-color" />
      <div className="zoom-in-long-bar-rectangle-color" />

      <div className="zoom-in-second-line" />
      <div className="zoom-in-minus-icon" />
    </div>
  );
}

export default ZoomInBar;
