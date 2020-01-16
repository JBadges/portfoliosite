import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./components/name";
import Projects from "./components/projects";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
