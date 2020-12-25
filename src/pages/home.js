import React, { Component } from 'react';
import Profile from "../components/profile";
import Skill from "../components/skill";


const style={
    display: "flex",
    align:"center",
    width:"2000px",
    margin:"0 auto",
}

class home extends Component {

  render() {
    return (
        <div style={style}>
            <Profile></Profile>
            <Skill></Skill>
        </div>
    );
  }
}

export default home;