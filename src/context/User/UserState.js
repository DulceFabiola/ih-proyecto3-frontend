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
      myCourses: [],
    },
    authStatus: false,
    msg: "",
  };
  // 2. CONFIGURACIÓN DEL REDUCER
  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  // 3. FUNCIONES
  const registerUser = async (form) => {
    const res = await axiosClient.post("users/signup", form);
    const token = res.data.data;
    const msg = res.data.msg;
    if (msg) {
      dispatch({
        type: "REGISTER_ERROR",
        payload: msg,
      });
    } else {
      dispatch({
        type: "REGISTRO_EXITOSO",
        payload: token,
      });
    }
  };

  const loginUser = async (form) => {
    try {
      const res = await axiosClient.post("users/login", form);
      const token = res.data.data;
      dispatch({
        type: "LOGIN_EXITOSO",
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const verifyingToken = async () => {
    //sacar el dato del storage del navegador
    const token = localStorage.getItem("token");
    //si el token existe lo preparamos en axios para mandarlo
    //a la sig. peticion de axios
    if (token) {
      axiosClient.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axiosClient.defaults.headers.common["x-auth-token"];
    }
    try {
      const res = await axiosClient.get("users/verifytoken");
      const userData = res.data.data;

      dispatch({
        type: "GET_DATA_USER",
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = async () => {
    dispatch({
      type: "LOGOUT_USUARIO",
    });
  };

  //EDITAR PERFIL
  const updateProfile = async (form, idUser) => {
    const res = await axiosClient.put(`users/editprofile/${idUser}`, form);
  };

  // 4. RETORNO
  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        authStatus: globalState.authStatus,
        msg: globalState.msg,
        myCourses: globalState.myCourses,
        registerUser,
        loginUser,
        verifyingToken,
        logoutUser,
        updateProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
