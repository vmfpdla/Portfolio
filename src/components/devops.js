import React, { Component } from "react";
import "../css/skill.css";
import Skill from "./skill";

import github from "../images/github.png";


const style={
  display:"flex",
}

class Devops extends Component {
  render() {
    return (
      <div>
        <h3>Devops</h3>
        <div style={style}>
          <Skill image={github} name="Github" ability="실무"></Skill>
        </div>
      </div>
    );
  }
}

export default Devops;
