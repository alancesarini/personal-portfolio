import React from "react";
import { useDispatch } from "react-redux";
import { hideDrawer } from "../../store/actions";

const Page = props => {
  const dispatch = useDispatch();
  dispatch(hideDrawer());

  return <div>{props.children}</div>;
};

export default Page;
