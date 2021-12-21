import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const EditProfile = () => {
  // 1. ESTADO GLOBAL
  let navigate = useNavigate();
  const params = useParams();
  const idUser = params.id;
  const ctx = useContext(UserContext);
  const { currentUser, updateProfile } = ctx;

  // 2. ESTADO LOCAL
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    country: "",
    description: "",
    image: "",
    experience: "",
  });

  // 3. FUNCIONES

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
    const { name, lastname, country, description, image, experience } =
      currentUser;

    setUserData({
      name: name,
      lastname: lastname,
      country: country,
      description: description,
      image: image,
      experience: experience,
    });
  }, [currentUser]);

  const handleChange = (e) => {
    e.preventDefault();

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(userData, idUser);
    navigate("/profile");
  };

  return (
    <div>
      <div classNameName="min-h-full">
        <main className="py-10">
          {/* <!-- Page header --> */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  {currentUser.image ? (
                    <img
                      className="h-16 w-16 rounded-full"
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
                      Editar mi perfil
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Información personal
                    </p>
                  </div>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                    <form
                      onSubmit={(event) => {
                        handleSubmit(event);
                      }}
                      className="space-y-8 divide-y divide-gray-200"
                    >
                      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                        <div>
                          <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                for="first-name"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Nombre
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  type="text"
                                  name="name"
                                  value={userData.name}
                                  required
                                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                for="last-name"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Apellido
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  type="text"
                                  name="lastname"
                                  value={userData.lastname}
                                  required
                                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                for="email"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Ciudad
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  name="country"
                                  type="text"
                                  value={userData.country}
                                  required
                                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                for="street-address"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Imagen de perfil
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  type="text"
                                  name="image"
                                  value={userData.image}
                                  required
                                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                for="city"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Experiencia
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  type="text"
                                  name="experience"
                                  value={userData.experience}
                                  required
                                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                              <label
                                for="email"
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                              >
                                Sobre mi:
                              </label>
                              <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <textarea
                                  onChange={(event) => {
                                    handleChange(event);
                                  }}
                                  name="description"
                                  type="text"
                                  rows="3"
                                  value={userData.description}
                                  required
                                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-5">
                        <div className="flex justify-end">
                          <Link to="/profile">
                            <button
                              type="button"
                              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Cancelar
                            </button>
                          </Link>
                          <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 mb-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-platzo-400 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Guardar cambios
                          </button>
                        </div>
                      </div>
                    </form>
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

export default EditProfile;
