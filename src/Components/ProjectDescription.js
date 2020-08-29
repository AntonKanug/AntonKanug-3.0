import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProjectDescription.scss";

export class ProjectDescription extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      // this.props.match.params.id

      <div className="projects-wrapper" style={{ fontFamily: "SFProReg" }}>
        <div className="description-section">
          <div className="text menu">
            <a
              onClick={() => this.nextPath("/#Projects")}
              style={{ marginTop: "3rem" }}
            >
              <div>← Back to Projects</div>
            </a>

            <h2>Watson Recruitment</h2>
            <h3>See the world on Snap </h3>
            <p>
              Snap can take you from the bustling streets of Istanbul, straight
              to the front row of Madison Square Garden, and across an ocean to
              Big Ben, all without leaving your seat. When Snap users post a
              story, they open up a window into their world. Mapbox helps make
              it easier to find those windows.
            </p>
            <p>
              Snap built Snap Map, a real-time heatmap of what’s happening,
              using Mapbox Maps SDKs for Mobile. Now, Snap users can search the
              globe to find the stories that matter to them.
            </p>
          </div>
          <img
            className="img"
            src="https://assets.website-files.com/5e871c608892778f95e77820/5e8f7ec9b29340d91ed9df22_5d54138201f72a0016007224_snap_img_1.png"
          />
          <div className="text">
            <p>
              Snap built Snap Map, a real-time heatmap of what’s happening,
              using Mapbox Maps SDKs for Mobile. Now, Snap users can search the
              globe to find the stories that matter to them.
            </p>
            <p>
              Snap can take you from the bustling streets of Istanbul, straight
              to the front row of Madison Square Garden, and across an ocean to
              Big Ben, all without leaving your seat. When Snap users post a
              story, they open up a window into their world. Mapbox helps make
              it easier to find those windows.
            </p>
          </div>
          <iframe
            width="100%"
            height="800px"
            src="https://www.youtube.com/embed/lS5pH5u_pTo?vq=hd1080"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDescription);
