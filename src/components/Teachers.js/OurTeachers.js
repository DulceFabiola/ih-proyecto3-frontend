import React, { useContext, useEffect } from "react";
import CourseContext from "../../context/Course/CourseContext";

const OurTeachers = () => {
  const ctx = useContext(CourseContext);
  const { teachers, getTeachers } = ctx;

  useEffect(() => {
    getTeachers();
  }, []);
  return (
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-8 sm:space-y-12">
          <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              The People
            </h2>
            <p class="text-xl text-gray-500">
              Risus velit condimentum vitae tincidunt tincidunt. Mauris
              ridiculus fusce amet urna nunc. Ut nisl ornare diam in.
            </p>
          </div>
          <ul
            role="list"
            class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {teachers.map((element) => {
              return (
                <li>
                  <div class="space-y-4">
                    {element.image ? (
                      <img
                        class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                        src={element.image}
                        alt=""
                      />
                    ) : (
                      <span class="inline-block mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          class="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    )}
                    <div class="space-y-2">
                      <div class="text-xs font-medium lg:text-sm">
                        <h2>{element.name}</h2>
                        {element.experience && (
                          <h2>Experiencia: {element.experience}</h2>
                        )}

                        {element.description && (
                          <h2>Algo sobre mi: {element.description}</h2>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
