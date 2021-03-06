import React, { Component } from 'react';
import './Navbar.scss';

var MobileMenuStyle = {
    height: "0px"
}

// var MobileMenuIcon = {
//     visibility: false
// }

// var MobileCloseIcon = {
//     isHidden: true
// }

const MobileMenu = (props) => {
    return (
      
                <div >
                    View Resume <i className="fas fa-chevron-right"></i>
                </div>
         
    );
}

const Anchors = () => {
    const anchorsArr = ["Projects", "Experience", "About"];
    return (anchorsArr.map(item => { return (<a key={item} href={`/#${item}`}>{item}</a>) }));
}

export class Navbar extends Component {
    state = {
        showMobileMenu: false,
        showButton: true,
    }

    clickedMenu = () => {
        this.setState({ showMobileMenu: true });
        MobileMenuStyle = { height: "100%" };
        this.setState({ showButton: false });
    }

    clickedMenuClose = () => {
        this.setState({ showMobileMenu: false });
        MobileMenuStyle = { height: "0px;" };
        this.setState({ showButton: true });
    }

    render() {

        return (
            <div className="nav-bar" style={{fontFamily:'SFProBold'}}>
                <div className="container">
                    <div className="row" >
                        <div className="col">
                            <div className="logo slide-in-blurred-top">
                                <span className="full-name">
                                    <h2 style={{fontFamily:'SFProBold', letterSpacing:'0.7px'}}>Anton Kanugalawattage</h2>
                                </span>
                                <span className="short-name" >
                                    <h2 style={{fontFamily:'SFProBold', letterSpacing:'0.7px'}}>Anton K</h2>
                                </span>
                            </div>
                        </div>
                        <div className="slide-in-blurred-right" style={{fontFamily:'SFProLight', fontSize:'18px'}}>
                            <div className="full-options">  
                                
                                <a href="" className="menu">
                                    <div className="resume-options" style={{fontFamily:'SFProBold'}}>
                                    📋 View Resume<i style={{paddingLeft:'5px'}}class="fas fa-arrow-right"></i>
                                    </div>
                                </a>
            
                                {/* <a className="menu" href="mailto:antondilon@gmail.com">
                                    <div className="resume-options" style={{fontFamily:'SFProBold'}}>
                                    📬
                                        antondilon@gmail.com
                                    </div>
                                </a> */}
                                <Anchors />
                            </div>
                            <div className="short-options">
                            <a href="" className="resume-link menu">
                                    <div className="resume-options" style={{fontFamily:'SFProBold'}}>
                                    📋 Resume<i style={{paddingLeft:'5px'}}class="fas fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showMobileMenu ? <MobileMenu /> : null}
            </div>
        );
    }
}

export default Navbar