import React, { Component } from "react";
import "./ProjectDescription.scss";
import { useParams } from "react-router-dom";

export class ProjectDescription extends Component {
  render() {
    return (
      <div>
        <h3> {this.props.id}</h3>
      </div>
    );
  }
}

export default ProjectDescription;
