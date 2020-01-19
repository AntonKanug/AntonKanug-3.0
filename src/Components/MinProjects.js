import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './MinProjects.scss';
export class MinProjects extends Component {
    render() {
        return (
            <div>
            <div className="project-title-min" style={{fontFamily:'SFProBold'}}>Other Projects</div>
            <div className="row">
                <div className="col-md-3 neo-shadow1">
                    <div className="project-type-min">Web App</div>
                    <div className="project-name-min">DevKit.</div>
                    <div style={{fontFamily:'SFProLight'}}>
                        <p style={{fontSize:'20px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.<a href="https://github.com/AmarJ/NN">multi-layer perceptron</a>. 
                        </p>
                        <Button
                         className="btn-mtl"
                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', textTransform:'none', outline:0}}
                        variant="contained"
                        color="primary"
                        endIcon={<GitHubIcon/>}
                    >GitHub</Button>
                    <Button
                            className="btn-mtl" 
                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', marginLeft:'10px', textTransform:'none', outline:0}}
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon/>}
                    >Project</Button>
                    </div>
                </div>


                <div className="col-md-3 neo-shadow1">
                    <div className="project-type-min">
                                Web App
                            </div>
                            <div className="project-name-min">
                                DevKit.
                            </div>
                    <div style={{fontFamily:'SFProLight'}}>
                        <p style={{fontSize:'20px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.<a href="https://github.com/AmarJ/NN">multi-layer perceptron</a>. 
                        </p>
                        <Button
                         className="btn-mtl"
                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', textTransform:'none', outline:0}}
                        variant="contained"
                        color="primary"
                        endIcon={<GitHubIcon/>}
                    >GitHub</Button>
                    <Button
                            className="btn-mtl" 
                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', marginLeft:'10px', textTransform:'none', outline:0}}
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon/>}
                    >Project</Button>
                    </div>
                </div>


                <div className="col-md-3 neo-shadow1">
                    <div className="project-type-min">
                                Web App
                            </div>
                            <div className="project-name-min">
                                DevKit.
                            </div>
                    <div style={{fontFamily:'SFProLight'}}>
                        <p style={{fontSize:'20px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.<a href="https://github.com/AmarJ/NN">multi-layer perceptron</a>. 
                        </p>
                        <Button
                         className="btn-mtl"
                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', textTransform:'none', outline:0}}
                        variant="contained"
                        color="primary"
                        endIcon={<GitHubIcon/>}
                    >GitHub</Button>
                    <Button
                            className="btn-mtl" 
                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', marginLeft:'10px', textTransform:'none', outline:0}}
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon/>}
                    >Project</Button>
                    </div>
                </div>


            </div>
            </div>
        )
    }
}

export default MinProjects
