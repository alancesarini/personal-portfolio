import React, { useState } from "react";
import TopBar from "./TopBar/TopBar";
import SideDrawer from "./SideDrawer/SideDrawer";

const Navigation = props => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerVisibility(!drawerVisibility);
  };

  return (
    <div>
      <TopBar
        onToggleDrawer={toggleDrawerHandler}
        openDrawer={drawerVisibility}
      />
      <SideDrawer
        onToggleDrawer={toggleDrawerHandler}
        visible={drawerVisibility}
      />
    </div>
  );
};

export default Navigation;
