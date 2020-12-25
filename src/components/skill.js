import React, { Component } from "react";
import image from "../images/photo.jpg";

const style = {
  width: "40%",
  height: "700px",
  background: "white",
  // borderRadius:"30px",
  // boxShadow: "-1px 9px 30px -4px rgba(155,155,155,0.44)"
};

const imagestyle={
  
  height: "800px",
}

class Skill extends Component {
  render() {
    return (
      <div style={style}>
        <img src={image} style={imagestyle}></img>
      </div>
    );
  }
}

export default Skill;
