// import request from "../utils/api";

export const addAttendee = user => {
  console.log(user);

  return {
    type: "ADD_USER",
    user: user,
    cost: user.hourly_wage
  };
};
