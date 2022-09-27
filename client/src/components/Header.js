import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="GNB">
      <div className="top">
        {/* 상단바 글자 */}
        <span className="main-text">스마트 도시 사업관리 시스템</span>
        <span className="ip-number">ip:256.23.1.123.89</span>
        <span className="admin-name">관리자 홍길동</span>
        <span className="logout">로그아웃</span>

        {/* 선택바 */}
        <div className="GNB_menu">
          <span className="dashboard-text">대시보드</span>
          <span className="service-text">서비스</span>
          <span className="collectionData-text">수집데이터</span>
          <span className="event-text">이벤트</span>
          <span className="systemManagement-text">시스템관리</span>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
}

export default Header;
