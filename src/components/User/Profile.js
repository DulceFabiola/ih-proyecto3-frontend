import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const Profile = () => {
  const ctx = useContext(UserContext);

  const { currentUser } = ctx;
  console.log(currentUser);
  return (
    <>
      <div class="min-h-full">
        <main class="py-10">
          {/* <!-- Page header --> */}
          <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div class="flex items-center space-x-5">
              <div class="flex-shrink-0">
                <div class="relative">
                  {currentUser.image ? (
                    <img
                      class="h-16 w-16 rounded-full"
                      src={currentUser.image}
                      alt=""
                    />
                  ) : (
                    <>
                      <span class="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          class="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </>
                  )}

                  <span
                    class="absolute inset-0 shadow-inner rounded-full"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
              <div>
                <h1 class="text-2xl font-bold text-gray-900">
                  {currentUser.name}
                </h1>
                <p class="text-sm font-medium text-gray-500">
                  Rol: {currentUser.role}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div class="space-y-6 lg:col-start-1 lg:col-span-2">
              {/* <!-- Description list--> */}
              <section aria-labelledby="applicant-information-title">
                <div class="bg-white shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Información personal
                    </h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Detalles personales
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Nombre
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {currentUser.name}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Apellido
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {currentUser.lastname ? currentUser.lastname : "-"}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Dirección electrónica
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {" "}
                          {currentUser.email}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          {" "}
                          Experiencia
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {currentUser.experience
                            ? currentUser.experience
                            : "-"}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Ciudad
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {currentUser.country ? currentUser.country : "-"}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Sobre mi:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
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
                      class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
                    >
                      Editar perfil
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            <section
              aria-labelledby="timeline-title"
              class="lg:col-start-3 lg:col-span-1"
            >
              <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2
                  id="timeline-title"
                  class="text-lg font-medium text-gray-900"
                >
                  Mis cursos
                </h2>

                {/* <!-- Activity Feed --> */}
                <div class="mt-6 flow-root">
                  <ul role="list" class="-mb-8">
                    <li>
                      <div class="relative pb-8">
                        <span
                          class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div class="relative flex space-x-3">
                          <div>
                            <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                              {/* <!-- Heroicon name: solid/user --> */}
                              <svg
                                class="w-5 h-5 text-white"
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
                          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p class="text-sm text-gray-500">
                                Nivel:
                                <a href="#" class="font-medium text-gray-900">
                                  Nivel del curso
                                </a>
                              </p>
                            </div>
                            <div class="text-right text-sm whitespace-nowrap text-gray-500">
                              <p class="text-sm text-gray-500">
                                Inicio:
                                <a href="#" class="font-medium text-gray-900">
                                  Fecha
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {currentUser.role === "Teacher" ? (
                  <div class="mt-6 flex flex-col justify-stretch">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Link to="/courses/create"> Crear un curso</Link>
                    </button>
                  </div>
                ) : (
                  <div class="mt-6 flex flex-col justify-stretch">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
