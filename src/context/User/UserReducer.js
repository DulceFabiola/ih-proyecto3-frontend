const reducer = (globalState, action) => {
  switch (action.type) {
    case "REGISTRO_EXITOSO":
    case "LOGIN_EXITOSO":
      localStorage.setItem("token", action.payload);

      return {
        ...globalState,
        authStatus: true,
      };

    case "REGISTER_ERROR":
    case "LOGIN_ERROR":
      return {
        ...globalState,
        authStatus: false,
        msg: action.payload,
      };

    case "GET_DATA_USER":
      return {
        ...globalState,
        authStatus: true,
        currentUser: action.payload,
      };

    case "LOGOUT_USUARIO":
      localStorage.removeItem("token");

      return {
        ...globalState,
        currentUser: {
          name: "",
          lastname: "",
          country: "",
          description: "",
          email: "",
          password: "",
          image: "",
          experience: "",
          role: "",
          mycourses: [],
        },
        authStatus: false,
        msg: action.payload,
      };
    case "ADD_COURSE":
      return {
        ...globalState,
        mycourses: [...globalState.currentUser.mycourses, action.payload],
      };
    default:
      return globalState;
  }
};

export default reducer;
