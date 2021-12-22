import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const Profile = () => {
  const ctx = useContext(UserContext);
  const { currentUser } = ctx;
  return (
    <>
      <div className="min-h-full">
        <main className="py-10 ">
          {/* <!-- Page header --> */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  {currentUser.image ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={currentUser.image}
                      alt=""
                    />
                  ) : (
                    <>
                      <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </>
                  )}

                  <span
                    className="absolute inset-0 shadow-inner rounded-full"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {currentUser.name}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  Rol: {currentUser.role}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              {/* <!-- Description list--> */}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Información personal
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Detalles personales
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Nombre
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {currentUser.name}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Apellido
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {currentUser.lastname ? currentUser.lastname : "-"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Dirección electrónica
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {currentUser.email}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          {" "}
                          Experiencia
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {currentUser.experience
                            ? currentUser.experience
                            : "-"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Ciudad
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {currentUser.country ? currentUser.country : "-"}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Sobre mi:
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {currentUser.description
                            ? currentUser.description
                            : "-"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <Link
                      to={`/editprofile/${currentUser._id}`}
                      className="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
                    >
                      Editar perfil
                    </Link>
                  </div>
                </div>
              </section>
              {currentUser.role === "Alumno" && (
                <section>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      My space Learning
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">
                          Reading
                        </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                          <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                            72%
                            <span className="ml-2 text-sm font-medium text-gray-500">
                              from 60%
                            </span>
                          </div>

                          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            <svg
                              className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Increased by</span>
                            12%
                          </div>
                        </dd>
                      </div>

                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">
                          Listening
                        </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                          <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                            58.16%
                            <span className="ml-2 text-sm font-medium text-gray-500">
                              from 56.14%
                            </span>
                          </div>

                          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            <svg
                              className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Increased by</span>
                            2.02%
                          </div>
                        </dd>
                      </div>

                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-gray-900">
                          Writting
                        </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                          <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                            58.16%
                            <span className="ml-2 text-sm font-medium text-gray-500">
                              from 56.14%
                            </span>
                          </div>

                          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            <svg
                              className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Increased by</span>
                            2.02%
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </section>
              )}
            </div>

            <section
              aria-labelledby="timeline-title"
              className="lg:col-start-3 lg:col-span-1"
            >
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2
                  id="timeline-title"
                  className="text-lg font-medium text-gray-900"
                >
                  Mis cursos
                </h2>

                {/* <!-- Activity Feed --> */}
                <div className="mt-6 flow-root">
                  <ul className="-mb-8">
                    {currentUser.mycourses.map((element, index) => {
                      return (
                        <li>
                          <div className="relative pb-8">
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            ></span>
                            <div className="relative flex space-x-3">
                              <div>
                                <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                  {/* <!-- Heroicon name: solid/user --> */}
                                  <svg
                                    className="w-5 h-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    Curso {index + 1}
                                  </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                  <p className="text-sm text-gray-500">
                                    Detalles:
                                    <Link
                                      to={`/courses/${element}`}
                                      className="font-medium text-gray-900"
                                    >
                                      del curso
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {currentUser.role === "Teacher" ? (
                  <div className="mt-12 flex flex-col justify-stretch">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-platzo-400 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Link to="/courses/create"> Crear un curso</Link>
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col justify-stretch">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-platzo-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Link to="/"> Inscribir un curso</Link>
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
