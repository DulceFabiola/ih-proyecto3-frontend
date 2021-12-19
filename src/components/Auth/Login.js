import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const Login = () => {
  const ctx = useContext(UserContext);
  const { loginUser } = ctx;
  // 1. ESTADO LOCAL
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(logUser);
  };
  return (
    <div>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="./../.././../images/idiomas.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Iniciar sesión
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo electrónico
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <Link
                        to="/signup"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        ¡Regístra una cuenta!
                      </Link>
                    </div>
                  </div>
                  <Link to="/profile">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Inicia sesión
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://blog.ipler.edu.co/hubfs/7-consejos-para-hablar-un-nuevo-idioma-y-conseguir-mejores-empleos.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
