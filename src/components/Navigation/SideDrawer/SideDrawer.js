import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBox from "@material-ui/icons/AccountBox";
import AccountTree from "@material-ui/icons/AccountTree";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

import classes from "./SideDrawer.module.css";

const SideDrawer = props => {
  return (
    <Drawer anchor="right" open={props.visible} className={classes.Drawer}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.onToggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.SideMenu}>
        <Link to="/bio" className={classes.Link}>
          <ListItem button>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="About me" className={classes.LinkText} />
          </ListItem>
        </Link>
        <Link to="/projects" className={classes.Link}>
          <ListItem button>
            <ListItemIcon>
              <AccountTree />
            </ListItemIcon>
            <ListItemText primary="My projects" className={classes.LinkText} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
