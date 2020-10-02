import { combineReducers } from "redux";
import loggedInUser from "./loggedInUser";
import posts from "./posts";

export default combineReducers({
  loggedInUser,
  posts,
});
