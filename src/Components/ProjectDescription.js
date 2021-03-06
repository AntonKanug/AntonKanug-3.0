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
                        {project.webiste?
                        <a style={{ margin: "0rem", marginRight:'1rem' }} href={project.webiste} target="_blank">Application ↗</a>
                        : null}
                        <a style={{ margin: "0rem" }} href={project.github} target="_blank">GitHub ↗</a>
                        </div>

                    {project.body?.map((item) => {
                        if (item.type === "text") return <p>{item.content}</p>;
                        if (item.type === "image")
                            return <><img className="img" src={item.content} /><h4>{item.alt}</h4></> ;
                    })}
                    {project.youtube?
                    <iframe
                        style={{border: "#dddddd solid 2.5px", marginTop:'1rem'}}
                        width="100%"
                        height="800px"
                        src={project.youtube}
                        allowFullScreen
                    ></iframe>:null}
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectDescription);
