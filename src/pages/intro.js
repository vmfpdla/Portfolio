import React, { Component } from 'react';
import Introduct from '../components/introduct';
import Skills from '../components/skills';

class intro extends Component {

  render() {
    return (
        <div>
          <Introduct></Introduct>
          <Skills></Skills>
        </div>
    );
  }
}

export default intro;