import React from "react";
import { Header, LeftSide, Map, ServiceBar } from "../components";

function Main() {
  return (
    <div className="map">
      <Map />
      <Header />
      <LeftSide />
      <ServiceBar />
    </div>
  );
}

export default Main;
