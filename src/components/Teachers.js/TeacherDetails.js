import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TeacherContext from "../../context/Teachers/TeacherContext";
const TeacherDetails = () => {
  const ctx = useContext(TeacherContext);
  const { getTeacher, singleTeacher } = ctx;
  //obtener el id de la url
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getTeacher(id);
  }, []);
  return (
    <div>
      <div class="min-h-full">
        <main class="py-10">
          {/* <!-- Page header --> */}
          <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div class="flex items-center space-x-5">
              <div class="flex-shrink-0">
                <div class="relative">
                  {singleTeacher.image ? (
                    <img
                      class="h-10 w-10 rounded-full"
                      src={singleTeacher.image}
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
                  Teacher: {singleTeacher.name}
                </h1>
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
                      Información
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
                          {singleTeacher.name}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Apellido
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singleTeacher.lastname
                            ? singleTeacher.lastname
                            : "-"}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Dirección electrónica
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singleTeacher.email}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          {" "}
                          Experiencia
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singleTeacher.experience
                            ? singleTeacher.experience
                            : "-"}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Ciudad
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singleTeacher.country ? singleTeacher.country : "-"}
                        </dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">
                          Sobre mi:
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {singleTeacher.description
                            ? singleTeacher.description
                            : "-"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDetails;
