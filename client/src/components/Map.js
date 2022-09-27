import React, { useEffect } from "react";
import "./Map.css";

const { kakao } = window;

function Map() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.49999581324621, 126.86281102222206),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // const markerPosition = new kakao.maps.LatLng(37.497, 126.8824);
    // const marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(map);
  }, []);

  return (
    <div className="map">
      <div id="map"></div>
      <div className="guro-shadow"></div>
      <div className="subtrack"></div>

      <div className="ping">
        <div className="Guil-Elementary-School-intersection"></div>
      </div>
    </div>
  );
}

export default Map;
