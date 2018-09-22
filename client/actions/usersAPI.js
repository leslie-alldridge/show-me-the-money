import request from "../utils/api";

function fetchAllUsers() {
  return {
    type: "ALL_USERS_REQ",
    isFetching: true,
    isAuthenticated: true
  };
}

function recAllUsers(response) {
  return {
    type: "ALL_USERS_DONE",
    isFetching: false,
    isAuthenticated: true,
    response: response.body
  };
}

export function getAllUsers() {
  return function(dispatch) {
    dispatch(fetchAllUsers());
    request("get", "/users").then(response => {
      if (!response.ok) {
      } else {
        dispatch(recAllUsers(response));
      }
    });
  };
}
