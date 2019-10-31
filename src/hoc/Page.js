import { useDispatch } from "react-redux";
import { hideDrawer } from "../store/actions";

const Page = props => {
  const dispatch = useDispatch();
  dispatch(hideDrawer());

  return props.children;
};

export default Page;
