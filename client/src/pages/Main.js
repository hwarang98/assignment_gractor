import React from "react";
import {
  Header,
  LeftSide,
  Map,
  ServiceBar,
  FirstRightSideBar,
  SecondSideBar,
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
    </div>
  );
}

export default Main;
