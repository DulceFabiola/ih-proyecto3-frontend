//funciones que modificaran el estado global

const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return {
        //operador spread, hay que clonar el estado global y hacer el cambio
        ...globalState,
        courses: action.payload,
      };

    case "GET_COURSE":
      return {
        ...globalState,

        singleCourse: action.payload,
      };
    case "GET_TEACHERS":
      return {
        //operador spread, hay que clonar el estado global y hacer el cambio
        ...globalState,
        teachers: action.payload,
      };
    default:
      return globalState;
  }
};
export default reducer;
