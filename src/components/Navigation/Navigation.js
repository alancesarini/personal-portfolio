import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar/TopBar";
import SideDrawer from "./SideDrawer/SideDrawer";
import { toggleDrawer } from "../../store/actions";

const Navigation = props => {
  const drawerVisibility = useSelector(state => state.drawerVisibility);
  const dispatch = useDispatch();

  return (
    <div>
      <TopBar onToggleDrawer={() => dispatch(toggleDrawer())} />
      <SideDrawer
        onToggleDrawer={() => dispatch(toggleDrawer())}
        visible={drawerVisibility}
      />
    </div>
  );
};

export default Navigation;
