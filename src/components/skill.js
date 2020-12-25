import React, { Component } from "react";
import Frontend from "./frontend";
import Backend from "./backend";
import Devops from "./devops";

const style={
  clear:"both",
  marginLeft:"5%",
}


class Skill extends Component {
  render() {
    return (
      <div style={style}>
        <br></br><br></br>
        <h1>스킬</h1>
        <Frontend></Frontend>
        <Backend></Backend>
        <Devops></Devops>
        
      </div>
    );
  }
}

export default Skill;
