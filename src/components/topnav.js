import "../css/topnav.css";

import React, { Component } from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";


import Project from "../pages/project";
import Intro from "../pages/intro";
import Home from "../pages/home";


const h1style={
  display:"inline-block",
  marginLeft:"5%",
  marginRight:"70%"
}
const hrstyle = {
  width:"90%",
};

class Top extends Component {
  render() {
    return (
      <div className='App'>
      <BrowserRouter>
        <h1 style={h1style}>YanZ</h1>
        <Link to='/'>
          <button>HOME</button>  
        </Link>
        <Link to='/intro'>
          <button>INTRO</button>
        </Link> 
        <Link to='/prject'>
          <button>PROJECT</button>
        </Link> 
        <hr style={hrstyle}></hr>
        <Route path="/" component={Home} exact/>
        <Route path="/intro" component={Intro} />
        <Route path="/project" component={Project} />
      </BrowserRouter>
    </div>
    )
}
}

export default Top;
