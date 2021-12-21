import React from "react";
import { useReducer } from "react";
import TeacherContext from "./TeacherContext";
import TeacherReducer from "./TeacherReducer";
import axiosClient from "./../../config/axios";

const TeacherState = (props) => {
  //1.INITIAL STATE (ESTADO INICIAL)

  const initialState = {
    courses: [],
    singleTeacher: {
      _id: "",
      name: "",
      country: "",
      description: "",
      image: "",
      experience: "",
    },
    teachers: [],
  };
  //2.CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL

  const [globalState, dispatch] = useReducer(TeacherReducer, initialState);

  //3.FUNCIONES DE CAMBIO EN ESTADO GLOBAL

  //LEER TEACHERS
  const getTeachers = async () => {
    const res = await axiosClient.get("users/readAll");
    const teachersList = res.data.data;
    dispatch({
      //este objeto se conoce como action
      type: "GET_TEACHERS",
      payload: teachersList,
    });
  };

  //LEER UN CURSO
  const getTeacher = async (teacherId) => {
    const res = await axiosClient.get(`users/readone/${teacherId}`);
    const selectedTeacher = res.data.data;
    dispatch({
      type: "GET_TEACHER",
      payload: selectedTeacher,
    });
  };

  //4.RETORNO
  return (
    <TeacherContext.Provider
      value={{
        teachers: globalState.teachers,
        singleTeacher: globalState.singleTeacher,
        getTeachers,
        getTeacher,
      }}
    >
      {props.children}
    </TeacherContext.Provider>
  );
};

export default TeacherState;
