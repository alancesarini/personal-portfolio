import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Bio from "./components/Pages/Bio/Bio";
import Projects from "./components/Pages/Projects/Projects";
import NotFound from "./components/Pages/NotFound/NotFound";
import classes from "./App.module.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Overpass, sans-serif",
    h1: {
      fontFamily: "Chivo, sans-serif"
    },
    h2: {
      fontFamily: "Chivo, sans-serif"
    },
    h3: {
      fontFamily: "Chivo, sans-serif"
    },
    h4: {
      fontFamily: "Chivo, sans-serif"
    },
    h5: {
      fontFamily: "Chivo, sans-serif"
    },
    h6: {
      fontFamily: "Chivo, sans-serif"
    }
  },
  palette: {
    primary: {
      main: "#3c99f0"
    },
    secondary: {
      main: "#084a83"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />

        <div className={classes.PageContent}>
          <Switch>
            <Route path="/" exact component={Bio} />
            <Route path="/bio" exact component={Bio} />
            <Route path="/projects" exact component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
