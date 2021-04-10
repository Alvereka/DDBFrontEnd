import React, { Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../../logo.svg";

import routes from "../../config/routes/UserRoutes";
const loading = <div className="suspense-page"> Loading... </div>;

export default class Home extends Component {
  state = {
    menuOpened: "none",
  };

  menu = [{ title: "", navigate: "" }];

  handleMenuOpen(e) {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  }

  render() {
    const routes = this.renderRoutes();
    return (
      <main className="main-layout full-size">
        {this.renderNavBar()}
        <Suspense fallback={loading}>
          <Switch> {routes} </Switch>
        </Suspense>
      </main>
    );
  }

  renderNavBar() {
    const { navigate } = this.props;
    return (
      <section className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <ul className={this.state.menuOpened ? "active" : "none"}>
              <li
                onClick={() => {
                  navigate("/");
                  this.handleMenuOpen();
                }}
              >
                Home
              </li>
              {this.menu.map((m) => {
                let navigates = m.navigate;
                return (
                  <li
                    key={"menu__" + m.title}
                    onClick={() => {
                      navigate(navigates);
                      this.handleMenuOpen();
                    }}
                  >
                    {m.title}
                  </li>
                );
              })}
              {/* <li>PRODUK</li>
              <li>LOKASI STORE</li> */}
            </ul>
            <div
              className={
                this.state.menuOpened ? "nav__icon  active" : "nav__icon"
              }
              onClick={(e) => {
                this.handleMenuOpen(e);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-mid">
            {<img src={logo} height="50px" alt="sukun-logo" />}
          </div>
          <div className="navbar-right" onClick={() => this.contactUsHandler()}>
            <i className="fa fa-comments"></i>
          </div>
        </div>
      </section>
    );
  }

  renderRoutes() {
    const routeElem = [];
    for (let i = 0; i < routes.length; i++) {
      const key = `route-${i}`;
      const route = routes[i];
      const { path, name } = routes[i];
      routeElem.push(
        <Route
          key={key}
          path={path}
          name={name}
          exact={true}
          render={(props) => <route.component {...this.props} />}
        />
      );
    }
    return routeElem;
  }
}
