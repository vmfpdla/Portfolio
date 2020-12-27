import React, { Component } from "react";
import "../css/skill.css";

class Skill extends Component {
    render() {
      return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={this.props.image}></img>
                </div>
                <div class="flip-card-back">
                    <p>{this.props.name}</p>
                    <p>{this.props.ability}</p>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Skill;