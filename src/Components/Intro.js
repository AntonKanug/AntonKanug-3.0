import React, { Component } from 'react'
import './Intro.scss';
import Snackbar from './Snackbar'


require('bootstrap')
export class Intro extends Component {
    state={
        open: 'inherit'
    }

    render() {
        setTimeout(() => {
        this.setState({
            open:'none'
            });
        }, 2000);

        return (
            <div>
                 <div  id="main" className="main-wrapper">
            <div className="container"  style={{marginTop:'50px'}}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6 col-xs-6">
                        <div className="banner-content slide-in-blurred-left" >
                            <div>
                            <h1 style={{fontFamily:'SFProBold'}}>
                            <span role="img" aria-label="Hand">👋</span> Hello!
                            </h1>
                            <p style={{fontFamily:'SFProLight', letterSpacing:'0.7px'}}>
                            My name is <span style={{fontFamily:'SFProSB'}}>Anton Kanugalawattage</span>. 📚 💻 I'm a 3rd year<span style={{fontFamily:'SFProSB'}}> Software Engineering</span> student at McMaster University. 
                            👨‍💻 Currently a <span style={{fontFamily:'SFProSB'}}>Software Developer Intern</span> at
                              <span style={{fontFamily:'SFProSB'}}> IBM</span>.
                            </p>
                            </div>
                        </div>


                        <div className="cont" style={{background:'#f5f5f5', marginTop: '0px', borderRadius:'10px', padding:'10px', width:'250px', height:'80px'}}>
                                <ul class="list-inline" >
                                    <div class="social-media-icon"  style={{display: 'inline-block', padding:5}}>
                                        <li class="social-git">
                                            <a href="https://github.com/AntonKanug" target="_blank"><img src="assets/github.svg" data-toggle="tooltip" style={{width:45, height:45}} title="GitHub"/></a>
                                        </li>
                                    </div>
                                    <div class="social-media-icon"  style={{display: 'inline-block', padding:5}}> 
                                        <li class="social-linkedin">
                                            <a href="https://www.linkedin.com/in/antonkanug/" target="_blank"><img src="assets/linkedin.svg" data-toggle="tooltip" style={{width:45, height:45}} title="LinkedIn"/></a>
                                        </li>
                                    </div>
                                    <div class="social-media-icon"  style={{display: 'inline-block', padding:5}}>
                                        <li class="social-email">
                                            <a href="#contact" ><img src="assets/email.svg" data-toggle="tooltip" style={{width:45, height:45}} title="Contact"/></a>
                                        </li>
                                    </div>
                                    <div class="social-media-icon"  style={{display: 'inline-block', padding:5}}>
                                        <li class="social-resume">
                                            <a href="assets/AK-Resume.pdf"  target="_blank"><img src="assets/cv.svg" data-toggle="tooltip" style={{width:45, height:45}} title="Resume" /></a>
                                        </li>
                                    </div>
                                </ul>
                            </div>



                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-6 slide-in-blurred-bottom" >
                        <img src="assets/img-landing.svg" className='me' alt="loading..." style={{paddingTop:'10px'}} />
                    </div>
                </div>
            </div>
        </div>
            <Snackbar/>
        </div>
        )
    }
}

export default Intro
