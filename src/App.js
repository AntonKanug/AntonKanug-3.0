import React, { Component, useEffect } from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ProjectDescription from "./Components/ProjectDescription";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollableAnchor from "react-scrollable-anchor";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./App.css";
import "./index.css";



class App extends Component {
  state = {
    open: "inherit",
    width: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: "inherit",
      width:window.innerWidth,
    };

  }

  componentWillMount(){
    window.addEventListener('resize', () => {
    this.setState({width: window.innerWidth});
    })
  }

   Sections = () => {
    const anchors = ["About", "Projects"];
    let sectionsArray = [<Intro />];
    if (this.state.width > 1000) sectionsArray.push(<Projects />)
    return anchors.map((item, index) => {
      return (
        <ScrollableAnchor id={item} key={index}>
          <div>{sectionsArray[index]}</div>
        </ScrollableAnchor>
      );
    });
  };


  render() {
    setTimeout(() => {
      this.setState({
        open: "none",
      });
    }, 4000);

    return (
      <div style={{ fontFamily: "SFPro" }}>
        <LinearProgress style={{ display: this.state.open, height: 5 }} />
        <div id="main" className="main-wrapper">
          <Navbar />
          <BrowserRouter>
            <Route exact path="/" component={this.Sections} />
            <ScrollToTop>
              <Route
                exact
                path="/:project"
                component={ProjectDescription}
              />
            </ScrollToTop>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
