import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-white">
        <main>
          {/* <!-- Alternating Feature Sections --> */}
          <div className="relative pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            ></div>
            {/* <!-- Hero section --> */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2"></div>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl  sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                      alt="People working on laptops"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-platzo-600 to-platzo-1000 mix-blend-multiply"></div>
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">¿Cómo aprender</span>
                      <span className="block text-platzo-800">idiomas?</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-platzo-800 sm:max-w-3xl">
                      Donde quieras. Cuando quieras.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <Link
                          to="/signup"
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-platzo-900 bg-white hover:bg-indigo-50 sm:px-8"
                        >
                          ¡Regístrate!
                        </Link>
                        <Link
                          to="/login"
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-platzo-800 bg-platzo-1000 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                        >
                          Inicia sesión
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-white">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <span className="h-20 w-20 rounded-md flex items-center justify-center">
                        <img src="./../../images/iconoE.png" alt="" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Hablando se aprende a hablar
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Conoce tu nivel de inglés, reserva una asesoría.
                      </p>
                      <div className="mt-6">
                        <a
                          href="https://meetings.hubspot.com/dulce-fabiola"
                          className="inline-flex bg-platzo-1000 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                        >
                          Resérvala hoy
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          &ldquo;Realmente disfruté mi estancia. Los Teachers
                          han tomado en serio mis preguntas y mis problemas, y
                          los ha respondido profesionalmente&rdquo;
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-6 w-6 rounded-full"
                              src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              alt=""
                            />
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            Katia Silva, Digital Marketing Manager
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative flex flex-col justify-center   lg:h-full">
                    <img
                      id="img-home"
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://i.blogs.es/757e54/google-meet/1366_2000.jpg"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24 bg-platzo-500">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="h-20 w-20 rounded-md flex items-center justify-center">
                        <img src="./../../images/iconoE.png" alt="" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Expande tu mundo a través de los idiomas
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        Puedes tomarlas de manera grupal o individual. Dentro de
                        nuestra plataforma, también contarás con ejercicios
                        prácticos creados para mejorar tu pronunciación,
                        gramática y comprensión.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/plans"
                          className="inline-flex bg-platzo-1000 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                        >
                          Planes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative flex flex-col justify-center lg:h-full">
                    <img
                      id="img-home-2"
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://wwwhatsnew.com/wp-content/uploads/2020/12/Funciones-Google-Meet.jpg"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Logo Cloud --> */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Con la confianza de más de 5 pequeñas empresas
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Gradient Feature Section --> */}
          <div className="bg-gradient-to-r from-platzo-600 to-platzo-1000">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                ¿Por qué Fluency?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-purple-200">
                Campus learning
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                <div>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      {/* <!-- Heroicon name: outline/inbox --> */}
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      Clases de conversación grupales
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      Cada 30 minutos en grupos pequeños para ganar confianza en
                      el momento de hablar inglés.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      {/* <!-- Heroicon name: outline/users --> */}
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      Profesores expertos certificados
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      Apoyo de profesores internacionales y bilingües para
                      impulsar tu carrera.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      {/* <!-- Heroicon name: outline/heart --> */}
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      Clases particulares con temas útiles a tu manera
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      Lecciones rápidas y actividades cortas para agilizar tu
                      aprendizaje.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      {/* <!-- Heroicon name: outline/document-report --> */}
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      Clases de conversación grupales
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      Cada 30 minutos en grupos pequeños para ganar confianza en
                      el momento de hablar inglés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Stats section --> */}
          <div className="relative bg-gray-900">
            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  ></div>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 className="text-sm font-semibold tracking-wide uppercase">
                  <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    Revisa cuál de nuestros planes se adapta mejor a tus
                    necesidades
                  </span>
                </h2>
                <p className="mt-3 text-3xl font-extrabold text-white"></p>
                <p className="mt-5 text-lg text-gray-300"></p>
                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  <p>
                    <span className="block text-2xl font-bold text-white">
                      Planes
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        Pensando en ti y tu conveniencia{" "}
                      </span>
                      el precio de nuestros cursos varía de acuerdo a la moneda
                      de tu país
                    </span>
                  </p>

                  <p>
                    <span className="block text-2xl font-bold text-white">
                      Sólo debes registrarte
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        Y encontramos el mejor precio que se ajuste a lo que
                        buscas
                      </span>{" "}
                      y agendar una cita
                    </span>
                  </p>

                  <p>
                    <span className="block text-2xl font-bold text-white">
                      Alumnos
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        Plataforma disponible 24/7
                      </span>{" "}
                      para que puedas estudiar a tu ritmo.
                    </span>
                  </p>

                  <p>
                    <span className="block text-2xl font-bold text-white">
                      Teachers
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        Ingresa tu curso
                      </span>{" "}
                      y empieza con tus clases.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- CTA Section --> */}
          <div className="bg-white">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">¿Listo para iniciar?</span>
                <span className="block text-platzo-1000 bg-clip-text text-transparent">
                  Es momento de comenzar la aventura
                </span>
              </h2>
              <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <Link
                  to="/signup"
                  className="flex items-center justify-center bg-platzo-400 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Regístrate
                </Link>
                <Link
                  to="/plans"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-platzo-400 bg-indigo-50 hover:bg-indigo-100"
                >
                  Conoce mas sobre nuestros planes
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
