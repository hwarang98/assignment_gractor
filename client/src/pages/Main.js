import React from "react";
import {
  Header,
  LeftSide,
  Map,
  ServiceBar,
  FirstRightSideBar,
  SecondSideBar,
  TimeServiceBar,
  ZoomInBar,
} from "../components";

function Main() {
  return (
    <div className="map">
      <Map />
      <Header />
      <LeftSide />
      <ServiceBar />
      <FirstRightSideBar />
      <SecondSideBar />

      <TimeServiceBar />
      <ZoomInBar />
    </div>
  );
}

export default Main;
