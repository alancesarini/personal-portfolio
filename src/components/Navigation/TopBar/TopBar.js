import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import classes from "./TopBar.module.css";
import { colors } from "../../../constants/colors";

const TopBar = props => {
  return (
    <AppBar
      position="fixed"
      className={classes.TopBar}
      style={{ backgroundColor: colors.dark }}
    >
      <Toolbar className={classes.ToolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.onToggleDrawer}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Alan Cesarini - Full Stack Developer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
