const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_TEACHERS":
      return {
        ...globalState,
        teachers: action.payload,
      };

    case "GET_TEACHER":
      return {
        ...globalState,

        singleTeacher: action.payload,
      };
    default:
      return globalState;
  }
};

export default reducer;
