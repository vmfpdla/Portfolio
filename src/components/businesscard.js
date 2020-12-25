import React, { Component } from "react";
import "../css/businesscard.css";
import image from "../images/logo.PNG";
import github from "../images/github.png";
import email from "../images/mail.png";

class BusinessCard extends Component {
  render() {
    return (
      <div id="square" class="flipInX animated businessCard">
        <div>
          <div class="intro">
            <h2>YanZ</h2>
            <p>프론트엔드 개발자</p>
            <p>Front-End developer</p>
            <br></br><br></br>
            <p>2017.3~ 세종대학교 재학중</p>
            <img class="emoji" src={email}></img><p>vmfpdlaDev@gmail.com</p>
            <img class="emoji" src={github}></img><p>https://github.com/vmfpdla</p>
          </div>
        </div>
        <div class="photo">
          <img src={image}></img>
        </div>
      </div>
    );
  }
}

export default BusinessCard;
