import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

import classes from "./SideDrawer.module.css";

const SideDrawer = props => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={props.visible}
      className={classes.Drawer}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.onToggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.SideMenu}>
        <Link to="/bio">
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="BIO" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
