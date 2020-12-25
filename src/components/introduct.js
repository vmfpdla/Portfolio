import React, { Component } from "react";
import "../css/introduct.css";

import BusinessCard from "../components/businesscard";

const style = {
  width:"800px",
  height:"500px",
  backgroundColor:"#f6ea8c",
  marginLeft:"5%",
  paddingTop:"0.8%",
  float:"left",
  
};

const balloon={
  float:"left",
}

class Introduct extends Component {
  render() {
    return (
      <div>
        <h1>소개</h1>
        <div style={style}>
          <BusinessCard></BusinessCard>
        </div>
        <div style={balloon}>
          <div class="balloon1">
            <p>반갑습니다 ! 팀원들과 소통하고 문제를 해결하는 과정에서 재미를 느끼는 신입 개발자 yanz 입니다.</p>
          </div>
          <div class="balloon2">
            <p>다양한 개발 스코프를 공부하면서 기획부터 배포, 유지보수까지 경험해보았습니다.<br></br><br></br> 현재 프론트엔드 skill 뿐 아니라 풀스택 개발자를 바라보며 공부하고 있습니다.</p>
          </div>
          <div class="balloon3">
            <p>새로운 기술에 과감히 도전하고, 끊임없이 배워 꾸준히 성장하겠습니다 :)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduct;

