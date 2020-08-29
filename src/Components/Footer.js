import React, { Component } from 'react'
import './Footer.scss'
export class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="say-hello" style={{fontFamily:"SFProThin", textAlign:'center'}}>
                    <h1>
                        Say hello, contact me on any of these platforms!
                    </h1>
                </div>

                <div className="container" style={{fontFamily:"SFProReg"}}>
                    <div className="web-footer">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 social">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <a className="no-underline" href="https://www.linkedin.com/in/antonkanug/">
                                            <div className="col-md-auto name">
                                                <i className="fab fa-linkedin social-icon"></i>
                                                LinkedIn
                                            </div>
                                        </a>
                                        <a className="no-underline" href="https://github.com/antonkanug">
                                            <div className="col-md-auto name">
                                                <i className="fab fa-github social-icon"></i>
                                                Github
                                            </div>
                                        </a>
                                        <a className="no-underline in-line" href="mailto:antondilon@gmail.com">
                                            <div className="col-md-auto name">
                                                <i className="far fa-envelope social-icon"></i>
                                                Email
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-footer">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 social">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <a className="no-underline" href="https://www.linkedin.com/in/antonkanug/">
                                            <div className="col-md-auto name">
                                                <i className="fab fa-linkedin social-icon"></i>
                                            </div>
                                        </a>
                                        <a className="no-underline " href="https://github.com/antonkanug">
                                            <div className="col-md-auto name">
                                                <i className="fab fa-github social-icon"></i>
                                            </div>
                                        </a>
                                        <a className="no-underline" href="mailto:antondilon@gmail.com">
                                            <div className="col-md-auto name">
                                                <i className="far fa-envelope social-icon"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="created-by" style={{fontFamily:"SFProThin", textAlign:'center', fontSize:'22px'}}>
                    I built this site using <b>Javascript</b> and <b>React.</b>
                </div>

            </div >
            

        )
    }
}

export default Footer
