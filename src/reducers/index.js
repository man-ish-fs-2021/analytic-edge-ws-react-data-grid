import { combineReducers } from "redux";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";

export default combineReducers({ Users, Posts, Comments });
