import React, { Component } from "react";
import {
  HashRouter
} from "react-router-dom";
import { Accessibility, VisibilityOff, Hearing, RecordVoiceOver, LocalLibrary } from '@material-ui/icons';
 
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
            <li>Payments</li>
          </ul>
        </div>
        <div className="container">
          <div className="avatar" onClick={this.openNavbar}><div><Accessibility style={{ color: "white" }}/></div></div>
          {this.state.isNavbarOpen && 
            <div className="navbar">
              <div><VisibilityOff style={{ color: "white" }}/></div>
              <div><Hearing style={{ color: "white" }}/></div> 
              <div onClick={this.openDebba} ><RecordVoiceOver style={{ color: "white" }}/></div>
              <div><LocalLibrary style={{ color: "white" }}/></div>
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