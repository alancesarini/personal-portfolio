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
    <AppBar position="fixed" style={{ backgroundColor: colors.dark }}>
      <div className={classes.Logo}>
        <img
          src="/assets/images/logo-alancesarini.png"
          alt="Alan Cesarini - Full stack developer"
        />
      </div>
      <Toolbar className={classes.ToolBar}>
        <Typography variant="h6" noWrap className={classes.Title}>
          Alan Cesarini - Full Stack Developer
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.onToggleDrawer}
          edge="start"
          className={classes.MenuIcon}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
