import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Bio from "./components/Bio/Bio";
import Projects from "./components/Projects/Projects";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <div className={classes.Content}>
          <Switch>
            <Route path="/" exact component={Bio} />
            <Route path="/bio" exact component={Bio} />
            <Route path="/projects" exact component={Projects} />
            <Route component={() => <div>NOT FOUND!!!</div>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
