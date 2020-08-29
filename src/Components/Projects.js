import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export class Projects extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
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
                {/* WATSON RECRUITMENT */}
                <div
                  className="watson-recruitment"
                  onClick={() => this.nextPath("/projects/1")}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div style={{ padding: "3rem 0 0 3rem" }}>
                        <h2>Watson Recruitment</h2>
                        <p>Mapping the stories that matter the most to you </p>

                        <div className="shcs_cms-read-wrap">
                          <div
                            style={{ color: "white" }}
                            className="shcs_cms-read-text"
                          >
                            Read More →
                          </div>
                        </div>
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

                {/* PRICE WATCH */}
                <div
                  className="col-md-6"
                  style={{ padding: "3.75rem 1.9rem 0 0" }}
                >
                  <div
                    className="price-watch"
                    onClick={() => this.nextPath("/projects/3")}
                  >
                    <div style={{ padding: "2rem 2rem 0 2rem" }}>
                      <h2>Price Watch </h2>
                      <p style={{ opacity: 1 }}>
                        Track your favourite products from Amazon
                      </p>
                      <div className="shcs_cms-read-wrap">
                        <div className="shcs_cms-read-text">Read More →</div>
                      </div>
                    </div>
                    <img
                      src="assets/pw-img.png"
                      style={{
                        objectFit: "contain",
                        padding: "1rem",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="col-md-6"
                  style={{ padding: "3.8rem 0 0 1.75rem" }}
                >
                  {/* DEVKIT */}
                  <div
                    className="devkit"
                    onClick={() => this.nextPath("/projects/4")}
                  >
                    <h2
                      style={{
                        padding: "2rem 0 0 2rem",
                        display: "inline-block",
                      }}
                    >
                      DevKit
                    </h2>
                    <div
                      className="shcs_cms-read-wrap"
                      style={{
                        padding: "2rem 2rem 0",
                        float: "right",
                        display: "inline-block",
                      }}
                    >
                      <div
                        className="shcs_cms-read-text"
                        style={{ color: "black" }}
                      >
                        Read More →
                      </div>
                    </div>
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
                      <div className="col-md-3"></div>
                    </div>
                  </div>
                  {/* TUTORFY */}
                  <div
                    className="tutorfy"
                    onClick={() => this.nextPath("/projects/5")}
                    style={{ marginTop: "3.7rem", padding: "2rem 0 0 2rem" }}
                  >
                    <h2>Tutorfy</h2>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="shcs_cms-read-wrap">
                          <div className="shcs_cms-read-text">Read More →</div>
                        </div>
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

            <div
              className="col-md-4"
              style={{ padding: "0 1.675rem 0 1.85rem" }}
            >
              {/* PATHIFY */}
              <div
                className="pathify"
                style={{ backgroundImage: "url(assets/pathify-img.png)" }}
                onClick={() => this.nextPath("/projects/2")}
              >
                <div>
                  <div style={{ padding: "2rem 2rem 0 2rem" }}>
                    <h2>Pathify</h2>
                    <p>
                      Mapping the stories that matter the most to you the most
                      for you
                    </p>
                    <div className="shcs_cms-read-wrap">
                      <div className="shcs_cms-read-wrap">
                        <div className="shcs_cms-read-text">Read More →</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* SUMOBOT */}
              <div
                className="sumobot"
                style={{ marginTop: "3.75rem", padding: "2rem 0 0 2rem" }}
                onClick={() => this.nextPath("/projects/6")}
              >
                <h2>SumoBot Competition</h2>
                <div className="row">
                  <div className="col-md-7">
                    <div className="shcs_cms-read-wrap">
                      <div className="shcs_cms-read-text">Read More →</div>
                    </div>
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
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Projects);
