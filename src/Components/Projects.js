import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Projects.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MinProjects from './MinProjects'
AOS.init();

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
                        <div className="col projects-title " style={{fontFamily:'SFProBold'}}>Projects</div>
                    </div>
                </div>
                <div className="project-section" >
                    <div className="row flex-column-reverse flex-md-row">
                        <div  className="col-md-6  gif logo-box" style={{justifyContent:'center'}}>
                            <img src="assets/PriceWatch.gif" className='talentboard-gif' alt="loading..." style={{marginLeft:'0px'}}/>
                        </div>
                        <div  className="neo-shadow col-md-6  project-description" >
                            <div className="project-type" >Web App</div>
                            <div className="project-name"  style={{display: 'inline-block'}}> Price Watch</div>

                            <div className="project-name"  style={{display: 'inline-block'}}>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/react.svg" data-toggle="tooltip" style={{width:'41px', height:'41px'}} title="react"/>
                                </div>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/python.svg" data-toggle="tooltip" style={{width:'35px', height:'35px'}} title="Python"/>
                                </div>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/mongodb.svg" data-toggle="tooltip" style={{width:'38px', height:'38px'}} title="mongoDB"/>
                                </div>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/firebase.svg" data-toggle="tooltip" style={{width:'35px', height:'35px'}} title="firebase"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-1 col-lg-3 not-mobile">
                                    <hr />
                                </div>
                                <div className="col-md-11 col-lg-7" style={{fontFamily:'SFProLight'}}>
                                    <p style={{fontSize:'20px'}}>
                                    Price Watch is a web application to track prices of products from Amazon. Using the frontend all prices can be monitored with it's changes over time. 
                                    When the price of a product changes an email is sent to users who are monitoring the price of a product. 
                                    </p>

                                    <Button
                                        className="btn-mtl"
                                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black',  padding:'7px 30px 7px 30px', textTransform:'none', color:'white', outline:0}}
                                        variant="contained"
                                        color="primary"
                                        href="https://github.com/AntonKanug/Price-Watch"
                                        target="_blank"
                                        endIcon={<GitHubIcon/>}>GITHUB</Button>
                                    <Button
                                        className="btn-mtl"
                                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', marginLeft:'10px',  padding:'7px 23px 7px 23px',color:'white',outline:0}}
                                        variant="contained"
                                        color="primary"
                                        href="https://pricewatch-antonk.web.app/"
                                        target="_blank"
                                        endIcon={<ArrowForwardIcon/>}>Project</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-section" >
                    <div className="row">
                        <div className="neo-shadow col-md-6 project-description">
                            <div className="project-type">Web App</div>
                            <div className="project-name"  style={{display: 'inline-block'}}> DevKit.</div>

                            <div className="project-name"  style={{display: 'inline-block'}}>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/react.svg" data-toggle="tooltip" style={{width:'41px', height:'41px'}} title="react"/>
                                </div>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/nodejs.svg" data-toggle="tooltip" style={{width:'45px', height:'405 x'}} title="nodejs"/>
                                </div>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/mongodb.svg" data-toggle="tooltip" style={{width:'38px', height:'38px'}} title="mongoDB"/>
                                </div>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/firebase.svg" data-toggle="tooltip" style={{width:'35px', height:'35px'}} title="firebase"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1 col-lg-3 not-mobile">
                                    <hr />
                                </div>
                                <div className="col-md-11 col-lg-7" style={{fontFamily:'SFProLight'}}>
                                    <p style={{fontSize:'20px'}}>
                                    DevKit is a web application that helps software developers find the optimal software tools for their project. 
                                    The project was created to limit the time spent on researching for a software tool. Users can recommend specific software tools by liking tools
                                    or by adding new tools.
                                    </p>
                                    <Button
                                        className="btn-mtl"
                                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black',  padding:'7px 30px 7px 30px',color:'white',outline:0}}
                                        variant="contained"
                                        color="primary"
                                        href="https://github.com/AntonKanug/DevKit"
                                        target="_blank"
                                        endIcon={<GitHubIcon/>}>GITHUB</Button>
                                    <Button
                                        className="btn-mtl"
                                        style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', marginLeft:'10px',  padding:'7px 23px 7px 23px',color:'white',outline:0}}
                                        variant="contained"
                                        color="primary"
                                        href="https://devkit-ce752.web.app/"
                                        target="_blank"
                                        endIcon={<ArrowForwardIcon/>}>Project</Button>
                                </div>
                            </div>
                        </div>

                        <div  className="col-md-6 gif logo-box">
                        <img src="assets/DevKit.gif" className='talentboard-gif' alt="loading..." style={{marginLeft:'0px'}}/>
                        </div>
                        

                    </div>
                </div>

                <div className="project-section third" >   
                    <div className="row flex-column-reverse flex-md-row">
                    <div  className="col-md-6  gif logo-box" style={{justifyContent:'center'}}>
                            <img src="assets/PriceWatch.gif" className='talentboard-gif' alt="loading..." style={{marginLeft:'0px'}}/>
                        </div>

                        <div className="col-md-6 project-description neo-shadow">
                            <div className="project-type">Robotics</div>
                            <div className="project-name"  style={{display: 'inline-block'}}> Sumobot Comp</div>

                            <div className="project-name"  style={{display: 'inline-block'}}>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/arduino.svg" data-toggle="tooltip" style={{width:'41px', height:'41px'}} title="arduino"/>
                                </div>
                                <div class="media-icon"  style={{display: 'inline-block'}}>
                                    <img src="assets/inventor.svg" data-toggle="tooltip" style={{width:'35px', height:'35px'}} title="inventor"/>
                                </div>
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
                                    
                                        className="btn-mtl"
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black',  padding:'7px 30px 7px 30px',color:'white',outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<GitHubIcon/>}
                                >GITHUB</Button>
                                <Button
                                     
                                        className="btn-mtl"
                                    style={{fontFamily:'SFProBold', fontWeight:'700',backgroundColor:'black', marginLeft:'10px', padding:'7px 23px 7px 23px',color:'white',outline:0}}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<ArrowForwardIcon/>}
                                >Project</Button>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
                <MinProjects/>
            </div>
        )
    }
}

export default Projects
