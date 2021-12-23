import React, { useEffect, useContext, useState } from "react";
import CourseContext from "./../../context/Course/CourseContext";
import TeacherContext from "../../context/Teachers/TeacherContext";
import { Link } from "react-router-dom";
import useQuery from "./useQuery";
const Courses = () => {
  //ESTADO GLOBAL
  const ctx = useContext(CourseContext);
  const { courses, getCourses } = ctx;
  let query = useQuery();

  const teacherCtx = useContext(TeacherContext);
  const { teachers, getTeachers } = teacherCtx;
  const [search] = useState(query.get("search"));
  const [coursesLocal, setCoursesLocal] = useState([]);

  //ESTADO LOCAL
  useEffect(() => {
    getCourses();
    getTeachers();
  }, []);

  useEffect(() => {
    setCoursesLocal(courses);
    if (search && search.length) {
      const newSearch = courses.filter(
        (element) =>
          eliminarAcentos(element.language.toLowerCase().trim()) ===
          search.toLowerCase().trim()
      );
      setCoursesLocal([...newSearch]);
    }
  }, [search, courses]);

  const eliminarAcentos = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Elige tu próximo grupo
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Puedes tomar grupos de tu nivel actual o de niveles anteriores
              para reforzar
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {coursesLocal.map((element, i) => {
              return (
                <>
                  <Link to={`/courses/${element._id}`} key={element._id}>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover"
                          src={element.image}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-xl font-semibold text-gray-900">
                            {element.language}
                          </p>
                          <p className="text-sm font-medium text-indigo-600">
                            {element.level}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Fecha de incripción:
                            </span>
                            {element.inscriptionDate}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Fecha de inicio:
                            </span>
                            {element.startDate}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Días:
                            </span>
                            {element.days}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Horario:
                            </span>
                            {element.schedule}
                          </p>
                        </div>
                        {teachers.map((teacher, i) => {
                          if (teacher._id === element.owner) {
                            return (
                              <Link key={i} to={`/teachers/${teacher._id}`}>
                                <div className="mt-6 flex items-center">
                                  <div className="flex-shrink-0">
                                    <span className="sr-only">
                                      {teacher.name}
                                    </span>
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={teacher.image}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                      Teacher: {teacher.name}
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                      <time dateTime="2020-03-16">
                                        Más detalles
                                      </time>
                                      <span aria-hidden="true">&middot;</span>
                                      <span>
                                        Cursos actuales:{" "}
                                        {teacher.mycourses.length}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
