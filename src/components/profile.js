import React, { Component } from "react";

const style = {
  width: "35%",
  height: "700px",
  background: "white",
  margin:"50px",
  // borderRadius:"30px",
  // boxShadow: "-1px 9px 30px -4px rgba(155,155,155,0.44)"
};

const h1style={
  fontSize:"100px",
}

class Profile extends Component {
  render() {
    return (
      <div style={style}>
        <br></br><br></br>
        <h1 style={h1style}>HI ,</h1>
        <h1 style={h1style}> I'm front-end Developer</h1>
      </div>
    );
  }
}

export default Profile;

