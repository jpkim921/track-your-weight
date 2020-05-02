import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Container from "./layout/Container";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Container />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
