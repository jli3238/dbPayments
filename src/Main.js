import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import ReactDOM from "react-dom";
import Home from "./Home";
import Contact from "./Contact";

const iconPath = process.env.PUBLIC_URL + '/assets/icons/';
const voicePath = process.env.PUBLIC_URL + '/assets/voice/';
 
class Main extends Component {
  constructor(props) {
    super(props);
    this.openNavbar = this.openNavbar.bind(this);
    this.openDebba = this.openDebba.bind(this);
    this.state = { isOpen: false, isNavbarOpen: false };
  }

  openNavbar() {
    this.setState({ isNavbarOpen: !this.state.isNavbarOpen});
    this.setState({ isOpen: false })
  }

  openDebba() {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">Payments</NavLink></li>
            <li><NavLink to="/">Collections</NavLink></li>
            <li><NavLink to="/">Trade Finance</NavLink></li>
            <li><NavLink to="/">Forex Pricing</NavLink></li>
            <li><NavLink to="/">Fund Transfer</NavLink></li>
            <li><NavLink to="/">Delegations</NavLink></li>
          </ul>
          
        </div>
        <div className="container">
          <div className="avatar"><div onClick={this.openNavbar}><img src={`${iconPath}AssebilityIcon.jpg`} alt=""/></div></div>
          {this.state.isNavbarOpen && 
            <div className="navbar">
              <div><img src={`${iconPath}screenreader.jpg`} alt=""/></div>
              <div><img src={`${iconPath}eye.jpg`} alt=""/></div>
              <div><img src={`${iconPath}ear.jpg`} onClick={this.openDebba} alt=""/></div>
              <div><img src={`${iconPath}braille.jpg`} alt=""/></div>
            </div>
          }
        {this.state.isOpen && <div id="mobileBox">
          <div className="content">
            <iframe title="debbaChatbot"
              allow="microphone;autoplay;"
              width="310px"
              height="505px"
              src="https://console.dialogflow.com/api-client/demo/embedded/0c993818-bd0c-4819-b5d3-fc4aadbb653b">
            </iframe>
          </div>
        </div>}
        </div>        
      </HashRouter>
    );
  }
}
 
export default Main;