import React from "react";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Nuestros planes
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Revisa cuál de nuestros planes se adapta mejor a tus necesidades
          </p>
        </div>

        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Online School
              </h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  $1500
                </span>
                <span className="ml-1 text-xl font-semibold">/mes</span>
              </p>
              <p className="mt-6 text-gray-500">
                12 clases de inglés grupales por/mes
              </p>

              <ul className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Clase de Orientación​
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Grupos pequeños por clases grupales, hasta 7 alumnos
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">3 primeros niveles</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-00"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Plataforma disponible las 24 horas del día
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="/"
              className="bg-indigo-50 text-platzo-200 hover:bg-indigo-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Agregar plan
            </Link>
          </div>

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Personalizado online
              </h3>

              <p className="absolute top-0 py-1.5 px-4 bg-platzo-200 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                Más popular
              </p>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  $2500
                </span>
                <span className="ml-1 text-xl font-semibold">/mes</span>
              </p>
              <p className="mt-6 text-gray-500">8 clases de inglés por/mes</p>

              <ul className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Seguimiento a tu proceso vía WhatsApp
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Constantes examenes de nivelación
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Plataforma disponible las 24 horas del día
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Plan de estudio personalizado
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="#"
              className="bg-platzo-400 text-white  mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Agregar plan
            </Link>
          </div>

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Online Premium
              </h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  $3500
                </span>
                <span className="ml-1 text-xl font-semibold">/mes</span>
              </p>
              <p className="mt-6 text-gray-500">12 clases de inglés por/mes</p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    2 clases grupales/mes
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Acceso ilimitado a lecciones interativas
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Diploma por cada nivel completado
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Inglés de negocios (Business English)
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Preparación para TOEFL y TOEIC
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-platzo-1000"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Inglés instrumental para areas profesionales
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="#"
              className="bg-indigo-50 text-platzo-200 hover:bg-indigo-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Agregar plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
