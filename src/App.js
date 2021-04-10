import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./layouts";
// import appConfig from "./conficg/app";

export default class App extends Component {
  // state = {}

  componentDidMount() {
    // console.log(appConfig);
  }

  isReady() {
    return true;
  }

  getExtendedProps(props) {
    return {
      ...props,
      navigate: (target, state) => props.history.push(target, state),
    };
  }

  render() {
    const isReady = this.isReady();
    if (!isReady) {
      return null;
    }
    return <Router>{this.renderLayoutRoutes()}</Router>;
  }

  renderLayoutRoutes() {
    return (
      <Switch>
        <Route
          path="/lihatproduk/:id"
          component={(props) => <Home {...this.getExtendedProps(props)} />}
        />
        <Route
          path="/"
          component={(props) => <Home {...this.getExtendedProps(props)} />}
        />
      </Switch>
    );
  }
}
