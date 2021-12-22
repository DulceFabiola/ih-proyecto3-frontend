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
  });

  // 3. FUNCIONES
  // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
  useEffect(() => {
    getCourse(idCourse);
  }, []);

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
    const {
      language,
      level,
      inscriptionDate,
      startDate,
      duration,
      mode,
      schedule,
      days,
      subject,
      link,
      image,
      owner,
    } = ctx.singleCourse;

    setCourseData({
      language: language,
      level: level,
      inscriptionDate: inscriptionDate,
      startDate: startDate,
      duration: duration,
      mode: mode,
      schedule: schedule,
      days: days,
      subject: subject,
      link: link,
      image: image,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          className="space-y-8 divide-y divide-gray-200"
        >
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Editar curso
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Cambiando el mundo
                </p>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="first-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Idioma
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="language"
                      value={courseData.language}
                      required
                      className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="first-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Nivel
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="level"
                      value={courseData.level}
                      required
                      className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="last-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Periodo de inscripción
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="inscriptionDate"
                      value={courseData.inscriptionDate}
                      required
                      className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Fecha de inicio
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      name="startDate"
                      type="text"
                      value={courseData.startDate}
                      required
                      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Duración
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      name="duration"
                      type="text"
                      value={courseData.duration}
                      required
                      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Modalidad
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                      name="mode"
                      required
                      className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value={""}>--</option>
                      <option value={"En línea"}>En línea</option>
                      <option value={"Presencial"}>Presencial</option>
                    </select>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="street-address"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Horario
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="schedule"
                      value={courseData.schedule}
                      required
                      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="city"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Días
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="days"
                      value={courseData.days}
                      required
                      className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Detalles
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Info.</p>
              </div>

              <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="username"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Lugar o liga de zoom
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="link"
                        value={courseData.link}
                        required
                        className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="username"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Imagen
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="image"
                        value={courseData.image}
                        required
                        className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Temario
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      name="subject"
                      rows="3"
                      value={courseData.subject}
                      required
                      className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    ></textarea>
                    <p className="mt-2 text-sm text-gray-500">
                      Detallar los temas de este curso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <Link to="/courses">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-platzo-400 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
