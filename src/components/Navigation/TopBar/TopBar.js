import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import classes from "./TopBar.module.css";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const TopBar = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AppBar position="fixed" color="secondary">
      <div className={classes.Logo}>
        <img
          src="/assets/images/logo-alancesarini.png"
          alt="Alan Cesarini - Full stack developer"
        />
      </div>
      <Toolbar className={classes.ToolBar}>
        <Typography
          variant="h6"
          noWrap
          className={isSmall ? classes.Title : classes.SmallTitle}
        >
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
