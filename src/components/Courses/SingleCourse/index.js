import React, { useContext, useEffect } from "react";
import CourseContext from "./../../../context/Course/CourseContext";
import UserContext from "../../../context/User/UserContext";
import { Link, useParams, useNavigate } from "react-router-dom";

const SingleCourse = () => {
  let navigate = useNavigate();
  const ctx = useContext(CourseContext);
  const userCtx = useContext(UserContext);
  const { getCourse, singleCourse, deleteCourse } = ctx;
  const { currentUser, addCourse } = userCtx;

  //obtener el id de la url
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getCourse(id);
  }, []);

  // 2. ESTADO LOCAL
  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL

  const registerCourse = (idCourse) => {
    addCourse(idCourse);
    navigate("/courses");
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Detalles del curso
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Idioma: Inglés</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Nivel</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.level}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Fecha de inscripción
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.inscriptionDate}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Fecha de inicio
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.startDate}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Duración</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.duration}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Modalidad</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.mode}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Días de clase
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.days}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Horario</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.schedule}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Temario</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.subject}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Liga o dirección
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {singleCourse.link}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Teacher</dt>
              <Link to={`/teachers/${singleCourse.owner}`}>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {singleCourse.owner}
                </dd>
              </Link>
            </div>
          </dl>
        </div>
      </div>
      {currentUser.role === "Alumno" ? (
        <div class="pt-5">
          <div class="flex justify-end">
            <Link to="/courses">
              <button
                type="button"
                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Todos los cursos
              </button>
            </Link>
            <button
              onClick={() => {
                registerCourse(singleCourse._id);
              }}
              type="submit"
              class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-platzo-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Inscribir curso
            </button>
          </div>
        </div>
      ) : (
        <>
          {singleCourse.owner === currentUser._id && (
            <div class="pt-5">
              <div class="flex justify-end">
                <Link to="/courses">
                  <button
                    onClick={() => deleteCourse(id)}
                    type="button"
                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Eliminar curso
                  </button>
                </Link>
                <Link to={`/courses/${singleCourse._id}/edit`}>
                  <button
                    type="button"
                    class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-platzo-400 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Editar curso
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SingleCourse;
