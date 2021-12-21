import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CourseContext from "../../context/Course/CourseContext";

const EditCourse = () => {
  // 1. ESTADO GLOBAL
  const navigate = useNavigate();
  const params = useParams();
  const idCourse = params.id;
  const ctx = useContext(CourseContext);
  const { singleCourse, getCourse, updateCourse } = ctx;

  // 2. ESTADO LOCAL
  const [courseData, setCourseData] = useState({
    level: "",
    inscriptionDate: "",
    startDate: "",
    duration: "",
    mode: "",
    schedule: "",
    days: "",
    subject: "",
    link: "",
    owner: "",
  });

  // 3. FUNCIONES
  // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
  useEffect(() => {
    getCourse(idCourse);
  }, []);

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
    const {
      level,
      inscriptionDate,
      startDate,
      duration,
      mode,
      schedule,
      days,
      subject,
      link,
      owner,
    } = ctx.singleCourse;

    setCourseData({
      level: level,
      inscriptionDate: inscriptionDate,
      startDate: startDate,
      duration: duration,
      mode: mode,
      schedule: schedule,
      days: days,
      subject: subject,
      link: link,
      owner: owner,
    });
  }, [singleCourse]);

  const handleChange = (e) => {
    e.preventDefault();

    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCourse(courseData, idCourse);
    navigate("/courses");
  };

  // 4. RETURN
  return (
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          class="space-y-8 divide-y divide-gray-200"
        >
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Editar curso
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Idioma: Inglés
                </p>
              </div>
              <div class="space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Nivel
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="level"
                      value={courseData.level}
                      required
                      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Periodo de inscripción
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="inscriptionDate"
                      value={courseData.inscriptionDate}
                      required
                      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Fecha de inicio
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      name="startDate"
                      type="text"
                      value={courseData.startDate}
                      required
                      class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Duración
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      name="duration"
                      type="text"
                      value={courseData.duration}
                      required
                      class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Modalidad
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                      name="mode"
                      required
                      class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value={""}>--</option>
                      <option value={"En línea"}>En línea</option>
                      <option value={"Presencial"}>Presencial</option>
                    </select>
                  </div>
                </div>

                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Horario
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="schedule"
                      value={courseData.schedule}
                      required
                      class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Días
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="days"
                      value={courseData.days}
                      required
                      class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Detalles
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Info.</p>
              </div>

              <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Lugar o liga de zoom
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg flex rounded-md shadow-sm">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="link"
                        value={courseData.link}
                        required
                        class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Temario
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                      name="subject"
                      rows="3"
                      value={courseData.subject}
                      required
                      class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    ></textarea>
                    <p class="mt-2 text-sm text-gray-500">
                      Detallar los temas de este curso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <Link to="/courses">
                <button
                  type="button"
                  class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
