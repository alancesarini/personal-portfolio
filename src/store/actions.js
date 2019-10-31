export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const HIDE_DRAWER = "HIDE_DRAWER";

export const toggleDrawer = () => {
  return {
    type: TOGGLE_DRAWER
  };
};

export const hideDrawer = () => {
  return {
    type: HIDE_DRAWER
  };
};
