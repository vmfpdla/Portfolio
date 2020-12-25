import React, { Component } from 'react';
import Introduct from '../components/introduct';
import Skill from '../components/skill';

class intro extends Component {

  render() {
    return (
        <div>
          <Introduct></Introduct>
          <Skill></Skill>
        </div>
    );
  }
}

export default intro;