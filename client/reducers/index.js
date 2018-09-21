import { combineReducers } from "redux";

import timer from "./timer";
import auth from "./auth";
import users from "./users";
import addAttendee from "./attendee";
import meetings from "./meetings";
import singlemeeting from "./singlemeeting";

export default combineReducers({
  auth,
  users,
  addAttendee,
  timer,
  meetings,
  singlemeeting
});
