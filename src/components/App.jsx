import React, { Component } from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Store from "./Store";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <style jsx>{`
          div {
            background-color: #ddeaff;
          }
        `}</style>
        <Navbar />
        <Switch>
          <Route exact path="/" render={Homepage} />
        </Switch>
        <Switch>
          <Route exact path="/store" component={Store} />
        </Switch>
      </div>
    );
  }
}

export default App;
