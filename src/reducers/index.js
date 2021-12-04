import { combineReducers } from "../redux";
import name from "./name";
import birthday from "./birthday";

export default combineReducers({
  name,
  birthday,
});
