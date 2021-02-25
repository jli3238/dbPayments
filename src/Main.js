import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import ReactDOM from "react-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

const iconPath = process.env.PUBLIC_URL + '/assets/icons/';
 
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
        <div className="container">
          <div className="avatar"><div onClick={this.openNavbar}><img src={`${iconPath}faceid.jpg`} alt=""/></div></div> */}
          {this.state.isNavbarOpen && 
            <div className="navbar">
              <div><img src={`${iconPath}screenreader.jpg`} alt=""/></div>
              <div><img src={`${iconPath}eye.jpg`} alt=""/></div>
              <div><img src={`${iconPath}ear.jpg`} onClick={this.openDebba} alt=""/></div>
              <div><img src={`${iconPath}braille.jpg`} alt=""/></div>
            </div>
          }
        {this.state.isOpen && <div id="mobileBox">
          <h1>Debba</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Payments</NavLink></li>
            <li><NavLink to="/stuff">:</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <div className="content">
          <iframe
            title="debba"
            allow="microphone;"
            width="350"
            height="430"
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