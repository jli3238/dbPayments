import React, { Component } from "react";
import {
  NavLink,
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
            <li><NavLink to="/Payments">Payments</NavLink></li>
            <li><NavLink to="/Collections">Collections</NavLink></li>
            <li><NavLink to="/TradeFinance">TradeFinance</NavLink></li>
            <li><NavLink to="/ForexPricing">ForexPricing</NavLink></li>
            <li><NavLink to="/Delegations">Delegations</NavLink></li>
          </ul>
          <div >
            <table class="styled-table">
              <thead>
                  <tr>
                  <th>Last Month</th>
                          <th>This Month's Payments</th>
                          <th>Last Quarter Payments</th>
                          <th>This Quarter Payments</th>
                          <th>Year to Date Payments</th>
                          <th>Total Successfull Payments</th>
                          <th>Total Failed Payments</th>
                          <th>Show Error Report</th>
                  </tr>
              </thead>
              <tbody>
                    <tr>
                        <td>$98979872.15</td>
                        <td>$6487556.15</td>
                        <td>$1265464.15</td>
                        <td>$5464646.15</td>
                        <td>$9732165.15</td>
                        <td>1150550</td>
                        <td>1200</td>
                        <td><a href="#">click here</a></td>
                      </tr>
                      <tr>
                          <td>$98979872.15</td>
                          <td>$6487556.15</td>
                          <td>$1265464.15</td>
                          <td>$5464646.15</td>
                          <td>$9732165.15</td>
                          <td>5648255</td>
                          <td>6555</td>
                          <td><a href="#">click here</a></td>
                      </tr>
                      <tr class="active-row">
                          <td>$1265464.15</td>
                          <td>$5464646.15</td>
                          <td>$9732165.15</td>
                          <td>$6487556.15</td>
                          <td>$98979872.15</td>
                          <td>5646465246</td>
                          <td>464646</td>
                          <td><a href="#">click here</a></td>
                      </tr>
                      <tr>
                          <td>$98979872.15</td>
                          <td>$6487556.15</td>
                          <td>$1265464.15</td>
                          <td>$5464646.15</td>
                          <td>$9732165.15</td>
                          <td>987987798</td>
                          <td>6589</td>
                          <td><a href="#">click here</a></td>
                      </tr>
              </tbody>
          </table>
        </div>
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