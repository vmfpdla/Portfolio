import React, { Component } from "react";
import "../css/skill.css";
import Skill from "./skill";

import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import vue from  "../images/vue.png";
import javascript from "../images/javascript.png";
import jquery from "../images/jquery.png";

const style={
  display:"flex",
}

class Frontend extends Component {
  render() {
    return (
      <div>
        <h3>FrontEnd</h3>
        <div style={style}>
          <Skill image={html} name="html" ability="실무"></Skill>
          <Skill image={css} name="css" ability="실무"></Skill>
          <Skill image={javascript} name="javascript" ability="실무"></Skill>
        </div>
        <div style={style}>
          <Skill image={jquery} name="jquery" ability="실무"></Skill>
          <Skill image={react} name="React & React Native" ability="토이"></Skill>
          <Skill image={vue} name="vue.js" ability="기초"></Skill>
        </div>
      </div>
    );
  }
}

export default Frontend;
