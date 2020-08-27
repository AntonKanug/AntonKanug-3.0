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
        <div className="nav-menu" style={MobileMenuStyle}>
            <a href="">
                <div className="resume-link">
                    View Resume <i className="fas fa-chevron-right"></i>
                </div>
            </a>
            <Anchors />
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
                                    <h1 style={{fontFamily:'SFProBold', letterSpacing:'0.7px'}}>Anton Kanugalawattage</h1>
                                </span>
                                <span className="short-name" >
                                    <h1 style={{fontFamily:'SFProBold', letterSpacing:'0.7px'}}>Anton K</h1>
                                </span>
                            </div>
                        </div>
                        <div className="col slide-in-blurred-right" style={{fontFamily:'SFProLight', fontSize:'18px'}}>
                            <div className="full-options">  
                                <a href="">
                                    <div className="resume-options" style={{fontFamily:'SFProBold'}}>
                                    📜 View Resume<i style={{paddingLeft:'5px'}}class="fas fa-arrow-right"></i>
                                    </div>
                                </a>
                                <Anchors />
                            </div>
                            <div className="short-options">
                                <i className={this.state.showButton ? "fas fa-bars menu-icon" : "fa fa-bars hidden"} onClick={this.clickedMenu} />
                                <i className={!this.state.showButton ? "fas fa-times menu-icon" : "fa fa-times hidden"} onClick={this.clickedMenuClose} />
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