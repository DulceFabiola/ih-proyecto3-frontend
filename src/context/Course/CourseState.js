//ESTADO GLOBAL:
//TODOS LOS COMPONENTES VAN A TENER ACCESO A TODA LA INFO QUE TENGAMOS EN ESTE ESTADO

//ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX
//ARQUITECTURA FLUX:

import React from "react";
import { useReducer } from "react";
import CourseContext from "./CourseContext";
import CourseReducer from "./CourseReducer";
import axiosClient from "./../../config/axios";

const CourseState = (props) => {
  //1.INITIAL STATE (ESTADO INICIAL)

  const initialState = {
    courses: [],
    singleCourse: {
      _id: "",
      language: "",
      level: "",
      inscriptionDate: "",
      startDate: "",
      duration: "",
      mode: "",
      schedule: "",
      days: "",
      subject: "",
      link: "",
      image: "",
      owner: "",
    },
    filterCourses: "",
  };
  //2.CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  //para cambios en el estado inicial
  //REDUCER son funciones que alteran el estado global
  //[globalState,dispatch] el dispatch es un asistente para enviar datos a los reducers
  //useReducer(Funciones que van a manipular el estado global,estado inicial)
  const [globalState, dispatch] = useReducer(CourseReducer, initialState);

  //3.FUNCIONES DE CAMBIO EN ESTADO GLOBAL

  //LEER CURSOS
  const getCourses = async () => {
    const res = await axiosClient.get("courses/readAll");
    const list = res.data.data;
    dispatch({
      //este objeto se conoce como action
      type: "GET_COURSES",
      payload: list, //valor que ocuparemos para cambiar el estado
    });
  };

  //LEER UN CURSO
  const getCourse = async (courseId) => {
    const res = await axiosClient.get(`courses/readone/${courseId}`);
    const selectedCourse = res.data.data;
    dispatch({
      type: "GET_COURSE",
      payload: selectedCourse,
    });
  };

  //CREAR CURSO
  const createCourse = async (form) => {
    await axiosClient.post("courses/create", form);
  };

  //EDITAR CURSO
  const updateCourse = async (form, idCourse) => {
    await axiosClient.put(`courses/edit/${idCourse}`, form);
  };

  //ELIMINAR CURSO
  const deleteCourse = async (idCourse) => {
    await axiosClient.delete(`courses/delete/${idCourse}`);
  };

  //4.RETORNO
  return (
    <CourseContext.Provider
      value={{
        courses: globalState.courses,
        singleCourse: globalState.singleCourse,
        filterCourses: globalState.filterCourses,
        getCourses,
        getCourse,
        createCourse,
        updateCourse,
        deleteCourse,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;
