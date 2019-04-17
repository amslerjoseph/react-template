import React, { Component } from "react";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import HomePage from "./home/HomePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
