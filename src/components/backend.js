import React, { Component } from "react";
import "../css/skill.css";
import Skill from "./skill";

import java from "../images/java.png";
import nodejs from "../images/nodejs.png";
import mysql from "../images/mysql.png";
import php from  "../images/php.png";
import python from "../images/python.png";
import c from "../images/c.png";

const style={
  display:"flex",
}

class Backend extends Component {
  render() {
    return (
      <div>
        <h3>BackEnd</h3>
        <div style={style}>
          <Skill image={nodejs} name="Node.js" ability="실무"></Skill>
          <Skill image={php} name="PHP" ability="실무"></Skill>
          <Skill image={mysql} name="Mysql" ability="실무"></Skill>
        </div>
        <div style={style}>
          <Skill image={java} name="Java" ability="토이"></Skill>
          <Skill image={python} name="Python" ability="토이"></Skill>
          <Skill image={c} name="C" ability="실무"></Skill>
        </div>
      </div>
    );
  }
}

export default Backend;
