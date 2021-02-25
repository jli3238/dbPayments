import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div id="mobileBox">
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
          <iframe title="debbaChatbot"
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/0c993818-bd0c-4819-b5d3-fc4aadbb653b">
          </iframe>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;