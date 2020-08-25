import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import MinProjects from "./MinProjects";
AOS.init();

export class Projects extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="projects-wrapper" style={{ fontFamily: "SFProReg" }}>
        <div className="container">
          <div className="row">
            <div
              className="col projects-title "
              style={{ fontFamily: "SFProBold" }}
            >
              Projects
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="row">
            <div className="col-md-8" style={{ padding: "0 2.75rem 0" }}>
              <div className="row">
                <div className="watson-recruitment">
                  <div className="row">
                    <div className="col-md-6">
                      <div style={{ padding: "3rem 0 0 3rem" }}>
                        <h2>Watson Recruitment</h2>
                        <p>Mapping the stories that matter the most to you </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="assets/watson-img.png"
                        style={{ width: "97%" }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  style={{ padding: "2.6rem 1.5rem 0 0" }}
                >
                  <div className="price-watch">
                    <div style={{ padding: "2rem 2rem 0 2rem" }}>
                      <h2>Price Watch </h2>
                      <p style={{ opacity: 1 }}>
                        Track your favourite products from Amazon
                      </p>
                    </div>
                    <img
                      src="assets/pw-img.png"
                      style={{
                        width: "96%",
                        position: "absolute",
                        bottom: 0,
                        padding: "1rem",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="col-md-6"
                  style={{ padding: "2.6rem 0 0 1.5rem" }}
                >
                  <div className="devkit">
                    <h2 style={{ padding: "2rem 0 0 2rem" }}>DevKit</h2>
                    <div className="row">
                      <div className="col-md-9">
                        <img
                          src="assets/devkit-img.png"
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            marginTop: "1.75rem",
                            paddingLeft: "0.5rem",
                          }}
                        />
                      </div>
                      <div className="col-md-3">
                        <p style={{ padding: "2rem 0 0 2rem" }}></p>
                      </div>
                    </div>
                  </div>

                  <div className="tutorfy" style={{ marginTop: "3rem" }}>
                    <h2 style={{ padding: "2rem 0 0 2rem" }}>Tutorfy</h2>
                    <div className="row">
                      <div className="col-md-5">
                        <p style={{ padding: "2rem 0 0 2rem" }}></p>
                      </div>
                      <div className="col-md-7">
                        <img
                          src="assets/tutorfy-img.png"
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            marginTop: "1.75rem",
                            paddingRight: "0.4rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4" style={{ padding: "0 2rem 0 1.25rem" }}>
              <div
                className="pathify"
                style={{ backgroundImage: "url(assets/pathify-img.png)" }}
              >
                <div>
                  <div style={{ padding: "2rem 2rem 0 2rem" }}>
                    <h2>Pathify</h2>
                    <p>Mapping the stories that matter the most to you the most for you</p>
                  </div>
                </div>
              </div>

              <div className="sumobot" style={{ marginTop: "3rem" }}>
                <h2 style={{ padding: "2rem 0 0 2rem" }}>
                  SumoBot Competition
                </h2>
                <div className="row">
                  <div className="col-md-7">
                    <p style={{ padding: "2rem 0 0 2rem" }}></p>
                  </div>
                  <div className="col-md-5">
                    <img
                      src="assets/sumobot-img.png"
                      style={{
                        width: "120px",
                        objectFit: "contain",
                        marginTop: "3rem",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* SUMO*/}
            </div>
          </div>
        </div>

        {/* <MinProjects /> */}
      </div>
    );
  }
}

export default Projects;
