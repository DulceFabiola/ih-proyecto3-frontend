import React, { useContext, useEffect } from "react";
import TeacherContext from "../../context/Teachers/TeacherContext";
import { Link } from "react-router-dom";
const OurTeachers = () => {
  const ctx = useContext(TeacherContext);
  const { teachers, getTeachers } = ctx;
  console.log(teachers);
  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Nuestros Teachers
            </h2>
            <p className="text-xl text-gray-500">
              Profesores expertos certificados
            </p>
          </div>
          <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {teachers.map((element) => {
              if (element.role === "Teacher") {
                return (
                  <Link to={`/teachers/${element._id}`}>
                    <li>
                      <div className="space-y-4">
                        {element.image ? (
                          <img
                            className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                            src={element.image}
                            alt=""
                          />
                        ) : (
                          <span className="inline-block mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gray-100">
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
                          <div className="text-xs font-medium lg:text-sm">
                            <h2>{element.name}</h2>
                            <p>
                              Contacto:
                              {element.email && <h2> {element.email}</h2>}
                            </p>
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
