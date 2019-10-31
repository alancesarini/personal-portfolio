import * as actionTypes from "./actions";

const initialState = {
  drawerVisibility: false
};

const reducer = (state = initialState, action) => {
  let updatedState = null;

  switch (action.type) {
    case actionTypes.TOGGLE_DRAWER:
      updatedState = { ...state };
      updatedState.drawerVisibility = !state.drawerVisibility;
      return updatedState;
    case actionTypes.HIDE_DRAWER:
      updatedState = { ...state };
      updatedState.drawerVisibility = false;
      return updatedState;
    default:
      return state;
  }
};

export default reducer;
