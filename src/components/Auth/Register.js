import React, { useState, useContext } from "react";
import UserContext from "./../../context/User/UserContext";
import { Link } from "react-router-dom";

const Register = () => {
  const ctx = useContext(UserContext);
  const { registerUser, msg } = ctx;
  console.log(ctx);
  //ESTADO LOCAL cuando trabajamos con el formulario lo guardamos local
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(newUser);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-auto justify-center items-center">
      <div className="min-h-full  bg-white flex  mt-10 ">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-20 w-auto"
                src="./../.././../images/iconoE.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Registra una cuenta
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form
                  onSubmit={(event) => {
                    handleSubmit(event);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre de usuario
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        name="name"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Correo electrónico
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        name="email"
                        type="email"
                        autocomplete="current-password"
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
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Registrarse como:
                    </label>
                    <select
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      name="role"
                      required
                      class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value={""}>---</option>
                      <option value={"Alumno"}>Alumno</option>
                      <option value={"Teacher"}>Teacher</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-red-500">
                      {msg && <p>{msg}</p>}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-platzo-200 hover:bg-platzo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Crear cuenta
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/D43F/production/_103253345_gettyimages-864589956.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
