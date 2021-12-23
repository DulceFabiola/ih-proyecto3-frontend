import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link to="/" className="inline-flex">
              <span className="sr-only">Fluency</span>
              <img
                className="h-25 w-auto"
                src="./../../images/iconoE.png"
                alt=""
              />
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-platzo-1000 uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Página no encontrada
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Disculpa, no pudimos encontrar la página que búscas.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="text-base font-medium  text-platzo-1000  hover:text-platzo-800"
                >
                  Regresar al home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageNotFound;
