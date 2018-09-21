export default function users(state = { response: [] }, action) {
  switch (action.type) {
    case "ALL_USERS_REQ":
      return {
        response: state.response,
        isFetching: true,
        isAuthenticated: true
      };
    case "ALL_USERS_DONE":
      return {
        isFetching: false,
        isAuthenticated: true,
        response: action.response
      };
    default:
      return state;
  }
}
