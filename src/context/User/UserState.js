import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axiosClient from "./../../config/axios";

const UserState = (props) => {
  // 1. INITIAL STATE
  const initialState = {
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
    },
    authStatus: false,
  };
  // 2. CONFIGURACIÓN DEL REDUCER
  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  // 3. FUNCIONES
  const registerUser = async (form) => {
    const res = await axiosClient.post("users/signup", form);
    console.log("here");
    const token = res.data.data;
    dispatch({
      type: "REGISTRO_EXITOSO",
      payload: token,
    });
  };
  // 4. RETORNO
  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        authStatus: globalState.authStatus,
        registerUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
