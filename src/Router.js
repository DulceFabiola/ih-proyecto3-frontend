import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/User/Profile";
import Courses from "./components/Courses";
import CreateCourses from "./components/Courses/CreateCourse";
import SingleCourse from "./components/Courses/SingleCourse";
import EditCourse from "./components/Courses/EditCourse";
import UserState from "./context/User/UserState";
import CourseState from "./context/Course/CourseState";
import EditProfile from "./components/User/EditProfile";
import Auth from "./routes/Auth";
import Private from "./routes/Private";
import OurTeachers from "./components/Teachers.js/OurTeachers";
const Router = () => {
  return (
    <>
      <UserState>
        <CourseState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Auth component={Home} />} />
                {/* Rutas de Usuario*/}
                <Route path="login" element={<Auth component={Login} />} />
                <Route path="signup" element={<Auth component={Register} />} />
                <Route
                  path="profile"
                  element={<Private component={Profile} />}
                />
                <Route path="editprofile/:id" element={<EditProfile />} />
                {/* Rutas de curso*/}
                <Route path="courses" element={<Courses />} />
                <Route path="courses/create" element={<CreateCourses />} />
                <Route path="courses/:id" element={<SingleCourse />} />
                <Route path="courses/:id/edit" element={<EditCourse />} />
                {/* Rutas de Nuestros profesores */}
                <Route path="ourteachers" element={<OurTeachers />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CourseState>
      </UserState>
    </>
  );
};

export default Router;
