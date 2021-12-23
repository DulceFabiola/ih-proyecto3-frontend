import React, { useEffect, useContext } from "react";
import CourseContext from "./../../context/Course/CourseContext";
import TeacherContext from "../../context/Teachers/TeacherContext";
import { Link } from "react-router-dom";
const Courses = () => {
  //ESTADO GLOBAL
  const ctx = useContext(CourseContext);
  const { courses, getCourses } = ctx;

  const teacherCtx = useContext(TeacherContext);
  const { teachers, getTeachers } = teacherCtx;

  //ESTADO LOCAL
  useEffect(() => {
    getCourses();
    getTeachers();
  }, []);

  return (
    <>
      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Elige tu próximo grupo
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Puedes tomar grupos de tu nivel actual o de niveles anteriores
              para reforzar
            </p>
          </div>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {courses.map((element) => {
              return (
                <>
                  <Link to={`/courses/${element._id}`} key={element._id}>
                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div class="flex-shrink-0">
                        <img
                          class="h-48 w-full object-cover"
                          src={element.image}
                          alt=""
                        />
                      </div>
                      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div class="flex-1">
                          <p class="text-xl font-semibold text-gray-900">
                            {element.language}
                          </p>
                          <p class="text-sm font-medium text-indigo-600">
                            {element.level}
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Fecha de incripción:
                            </span>
                            {element.inscriptionDate}
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Fecha de inicio:
                            </span>
                            {element.startDate}
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Días:
                            </span>
                            {element.days}
                          </p>
                          <p class="mt-3 text-base text-gray-500">
                            <span className="font-medium text-gray-600">
                              Horario:
                            </span>
                            {element.schedule}
                          </p>
                        </div>
                        {teachers.map((teacher) => {
                          if (teacher._id === element.owner) {
                            return (
                              <Link to={`/teachers/${teacher._id}`}>
                                <div class="mt-6 flex items-center">
                                  <div class="flex-shrink-0">
                                    <span class="sr-only">{teacher.name}</span>
                                    <img
                                      class="h-10 w-10 rounded-full"
                                      src={teacher.image}
                                      alt=""
                                    />
                                  </div>
                                  <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                      Teacher: {teacher.name}
                                    </p>
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                      <time datetime="2020-03-16">
                                        Más detalles
                                      </time>
                                      <span aria-hidden="true">&middot;</span>
                                      <span>
                                        Cursos actuales:{" "}
                                        {teacher.mycourses.length + 1}
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
