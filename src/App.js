import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./components/Navigation/TopBar/TopBar";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Bio from "./components/Bio/Bio";
import Projects from "./components/Projects/Projects";
import classes from "./App.module.css";

function App() {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerVisibility(!drawerVisibility);
  };

  return (
    <div>
      <Router>
        <TopBar
          onToggleDrawer={toggleDrawerHandler}
          openDrawer={drawerVisibility}
        />
        <SideDrawer
          onToggleDrawer={toggleDrawerHandler}
          visible={drawerVisibility}
        />

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
