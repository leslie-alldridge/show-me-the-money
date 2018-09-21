import { combineReducers } from "redux";

import auth from "./auth";
import userRed from "./userRed";
import addAttendee from "./attendee";
import meetings from "./meetings";
import singlemeeting from "./singlemeeting";

export default combineReducers({
  auth,
  userRed,
  addAttendee,
  meetings,
  singlemeeting
});
