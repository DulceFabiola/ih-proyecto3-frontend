import React, { useContext, useEffect } from "react";
import TeacherContext from "../../context/Teachers/TeacherContext";
import { Link } from "react-router-dom";
const OurTeachers = () => {
  const ctx = useContext(TeacherContext);
  const { teachers, getTeachers } = ctx;
  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Nuestros Teachers
            </h2>
            <p className="text-xl text-gray-500">
              Profesores expertos certificados
            </p>
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {teachers.map((element) => {
              if (element.role === "Teacher") {
                return (
                  <Link to={`/teachers/${element._id}`}>
                    <li>
                      <div className="space-y-6">
                        {element.image ? (
                          <img
                            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                            src={element.image}
                            alt=""
                          />
                        ) : (
                          <span className="inline-block mx-auto mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                        )}
                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>Teacher: {element.name}</h3>
                            <p className="text-platzo-900">Contacto:</p>
                            <h3>{element.email}</h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
