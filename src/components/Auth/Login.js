import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const Login = () => {
  const ctx = useContext(UserContext);
  const { loginUser, msg } = ctx;
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-auto justify-center items-center">
      <div className="min-h-full  bg-white flex mt-10">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="h-25 w-auto">
              <img
                className="h-25 w-auto"
                src="./../../../images/iconoE.png"
                alt="Fluency"
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
                        className="font-medium text-platzo-200 hover:text-platzo-400"
                      >
                        ¡Regístra una cuenta!
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-red-500">
                      {msg && <p>{msg}</p>}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  bg-platzo-400 text-white hover:bg-platzo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-platzo-100"
                  >
                    Inicia sesión
                  </button>
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
