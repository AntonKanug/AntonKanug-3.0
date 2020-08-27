import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ProjectDescription from "./Components/ProjectDescription";
import "./index.css";
import ScrollableAnchor from "react-scrollable-anchor";
import LinearProgress from "@material-ui/core/LinearProgress";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Sections = () => {
  const anchors = ["About", "Projects"];
  const sectionsArray = [<Intro />, <Projects />];
  return anchors.map((item, index) => {
    return (
      <ScrollableAnchor id={item} key={index}>
        <div>{sectionsArray[index]}</div>
      </ScrollableAnchor>
    );
  });
};

class App extends Component {
  state = {
    open: "inherit",
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
            <Route exact path="/" component={Sections} />
            <Switch>
              <Route
                exact
                path="/projects/:id"
                component={(routerProps) => (
                  <ProjectDescription id={routerProps.match.params.id} />
                )}
              />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
