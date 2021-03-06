import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const Header = () => {
  const ctx = useContext(UserContext);

  const navigate = useNavigate();

  const { currentUser, verifyingToken, logoutUser } = ctx;

  useEffect(() => {
    verifyingToken();
  }, []);
  const [isOpen, setisOpen] = useState(false);

  const handleProfileButton = () => {
    setisOpen(!isOpen);
  };

  //Input guardado en un estado local
  const [searchValue, setSearchValue] = useState("");
  const handleChangeSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const searchBar = () => {
    navigate(`/courses?search=${searchValue}`);
  };

  return (
    <>
      <nav className="bg-platzo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  onClick={() => handleProfileButton()}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!--
              Icon when menu is closed.
              Heroicon name: outline/menu
              Menu open: "hidden", Menu closed: "block"
            --> */}
                  <svg
                    className="block h-6 w-6"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="./../../../images/fluency.png"
                    alt="fluency"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="./../../../images/fluency.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              {currentUser.name ? (
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  <Link
                    to="/courses"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Cursos disponibles
                  </Link>
                  <Link
                    to="/teachers"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Encuentra un teacher
                  </Link>

                  <Link
                    to="/plans"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Planes
                  </Link>
                </div>
              ) : (
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link
                    to="/"
                    className="hover:bg-gray-700 hover:text-white text-platzo-300 px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Sobre nosotros
                  </Link>

                  <Link
                    to="/plans"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Planes
                  </Link>
                </div>
              )}
            </div>
            {currentUser.name ? (
              <>
                <div className="flex items-center">
                  <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end ">
                    <div className="max-w-lg w-full lg:max-w-xs">
                      <label for="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <form onSubmit={() => searchBar()}>
                          <input
                            onChange={(event) => handleChangeSearch(event)}
                            id="search"
                            name="search"
                            value={searchValue}
                            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-platzo-300 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  {currentUser.role === "Teacher" && (
                    <>
                      <Link to="/courses/create">
                        <div className="flex-shrink-0">
                          <button
                            type="button"
                            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md bg-platzo-400 text-white bg-opacity-60 hover:bg-opacity-70  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                          >
                            {/* <!-- Heroicon name: solid/plus-sm --> */}
                            <svg
                              className="-ml-1 mr-2 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Crear curso</span>
                          </button>
                        </div>
                      </Link>
                    </>
                  )}
                  <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center ">
                    {/* 
          <!-- Profile dropdown --> */}
                    <div className="ml-3 relative">
                      <div>
                        <button
                          onClick={() => handleProfileButton()}
                          type="button"
                          className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          aria-haspopup="true"
                        >
                          <span className="sr-only">Abrir menu de usuario</span>
                          {currentUser.image ? (
                            <img
                              className="h-10 w-10 rounded-full"
                              src={currentUser.image}
                              alt=""
                            />
                          ) : (
                            <>
                              <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
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
                        </button>
                      </div>

                      {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                      <div
                        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                          isOpen ? "block" : "hidden"
                        } `}
                        style={{ zIndex: "1" }}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-0"
                        >
                          Mi perfil
                        </Link>

                        <Link
                          to="/"
                          onClick={() => logoutUser()}
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-2"
                        >
                          Cerrar sesi??n
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link
                    to="/login"
                    className="bg-platzo-400 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    ??Inicia sesi??n!
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="md:hidden" id="mobile-menu">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              to="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Sobre Nosotros
            </Link>

            <Link
              to="/teachers"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Encuentra un teacher
            </Link>

            <Link
              to="/plans"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Planes
            </Link>
          </div>
          {currentUser.name ? (
            <>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5 sm:px-6">
                  {currentUser.image ? (
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={currentUser.image}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0">
                      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                  )}
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {currentUser.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {currentUser.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">Notificaciones</span>
                    {/* <!-- Heroicon name: outline/bell --> */}
                    <svg
                      className="h-6 w-6"
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1 sm:px-3">
                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Mi perfil
                  </Link>

                  <Link
                    to="/"
                    onClick={() => logoutUser()}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Cerrar sesi??n
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
