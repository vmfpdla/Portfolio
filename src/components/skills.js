import React, { Component } from "react";
import Frontend from "./frontend";
import Backend from "./backend";
import Devops from "./devops";

const style={
  clear:"both",
  marginLeft:"5%",
}

const style1={
  display:"flex",
  
}


class Skill extends Component {
  render() {
    return (
      <div style={style}>
        <br></br><br></br>
        <h1>스킬</h1>
        <div style={style1}>
          <Frontend></Frontend>
          <Backend></Backend>
          <Devops></Devops>
        </div>
      </div>
    );
  }
}

export default Skill;
