import React, { Component } from 'react'
import './Footer.scss'
export class Footer extends Component {
    render() {
        return (
            <>
                <div className="container" style={{fontFamily:"SFProReg", paddingBottom:'4rem'}}>
                    <div className="web-footer">
                    <div className="footer-wrapper">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 social">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                    <a className="no-underline" href="https://github.com/antonkanug">
                                            <div className="col-md-auto name">
                                                <i className="fab fa-github social-icon"></i>
                                                Github
                                            </div>
                                        </a>
                                        <a className="no-underline" href="https://www.linkedin.com/in/antonkanug/">
                                            <div className="col-md-auto name">
                                                <i className="fab fa-linkedin social-icon"></i>
                                                LinkedIn
                                            </div>
                                        </a>
                                        <a className="no-underline in-line" href="mailto:antondilon@gmail.com">
                                            <div className="col-md-auto name">
                                                <i className="far fa-envelope social-icon"></i>
                                                antondilon@gmail.com
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-footer">
            </div>
        </>
        )
    }
}

export default Footer
