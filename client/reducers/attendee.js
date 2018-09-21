const addAttendee = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      const index1 = state.findIndex(
        person => person.user.id === action.user.id
      );
      if (index1 > -1) {
        return [...state];
      } else {
        return [...state, action];
      }
    default:
      return state;
  }
};

export default addAttendee;
