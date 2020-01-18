import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Projects.scss';

export class Projects extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div  className="projects-wrapper" style={{fontFamily:'SFProReg'}}>
                <div className="container">
                    <div className="row">
                        <div className="col projects-title " style={{fontFamily:'SFProBold'}}>
                                Projects
                        </div>
                    </div>
                </div>
                <div className="project-section">
                    <div className="row flex-column-reverse flex-md-row">
                        <div  className="col-md-6  gif logo-box" style={{justifyContent:'center'}}>
                            <img src="assets/PriceWatch.gif" className='talentboard-gif' alt="loading..." style={{marginLeft:'0px'}}/>
                        </div>
                        <div  className="neo-shadow col-md-6  project-description" >
                            <div className="project-type" >
                                Web App
                            </div>
                            <div className="project-name" > 
                                Price Watch
                            </div>
                            <div className="row">
                                <div className="col-md-1 col-lg-3 not-mobile">
                                    <hr />
                                </div>
                                <div className="col-md-11 col-lg-7" style={{fontFamily:'SFProLight'}}>
                                    <p style={{fontSize:'20px'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>

                                    <Button
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', textTransform:'none', outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<GitHubIcon/>}
                                >GitHub</Button>
                                <Button
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', marginLeft:'10px', textTransform:'none', outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowForwardIcon/>}>Project</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-section">
                    <div className="row">
                        <div className="neo-shadow col-md-6 project-description">
                            <div className="project-type">
                                Web App
                            </div>
                            <div className="project-name">
                                DevKit.
                            </div>
                            <div className="row">
                                <div className="col-md-1 col-lg-3 not-mobile">
                                    <hr />
                                </div>
                                <div className="col-md-11 col-lg-7" style={{fontFamily:'SFProLight'}}>
                                    <p style={{fontSize:'20px'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <Button
                                    
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', textTransform:'none', outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<GitHubIcon/>}
                                >GitHub</Button>
                                <Button
                                     
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', marginLeft:'10px', textTransform:'none', outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowForwardIcon/>}
                                >Project</Button>
                                </div>
                            </div>
                        </div>

                        <div  className="col-md-6 gif logo-box">
                        <img src="assets/DevKit.gif" className='talentboard-gif' alt="loading..." style={{marginLeft:'0px'}}/>
                        </div>
                        

                    </div>
                </div>

                <div className="project-section third">   
                    <div id="flex-1" className="row flex-column-reverse flex-md-row">
                        <div id="a" className="col-md-6 gif logo-box" style={{justifyContent:'center'}}>
                            <img src="assets/PriceWatch.gif" className='talentboard-gif' alt="loading..." style={{marginLeft:'0px'}}/>
                        </div>

                        <div id="b" className="col-md-6 project-description neo-shadow">
                            <div className="project-type">
                                Robotics
                            </div>
                            <div className="project-name">
                                Sumobot Competiton
                            </div>
                            <div className="row">
                                <div className="col-md-1 col-lg-3 not-mobile">
                                    <hr />
                                </div>
                                <div className="col-md-11 col-lg-7" style={{fontFamily:'SFProLight'}}>
                                    <p style={{fontSize:'20px'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.<a href="https://github.com/AmarJ/NN">multi-layer perceptron</a>. 
                                    </p>
                                    <Button
                                    
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', textTransform:'none', outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<GitHubIcon/>}
                                >GitHub</Button>
                                <Button
                                     
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', padding:'7px 30px 7px 30px', marginLeft:'10px', textTransform:'none', outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowForwardIcon/>}
                                >Project</Button>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
