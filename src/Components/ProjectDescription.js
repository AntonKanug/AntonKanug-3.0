import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProjectDescription.scss";

const projects = require("./projects.json");
export class ProjectDescription extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const project = projects[this.props.match.params.project];
        return (
            <div
                className="projects-wrapper"
                style={{ fontFamily: "SFProReg" }}
            >
                <div className="description-section">
                    <div className="text menu">
                        <a
                            onClick={() => this.nextPath("/#Projects")}
                            style={{ marginTop: "3rem" }}
                        >
                            <div>← Back to Projects</div>
                        </a>

                        <h2>{project.title}</h2>
                        <h3>{project.subtitle}</h3>
                    </div>

                    {project.body?.map((item) => {
                        if (item.type === "text") return <p>{item.content}</p>;
                        if (item.type === "image")
                            return <img className="img" src={item.content} />;
                    })}

                    <iframe
                        width="100%"
                        height="800px"
                        src="https://www.youtube.com/embed/lS5pH5u_pTo?vq=hd1080"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectDescription);
