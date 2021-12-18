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
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Rutas de Usuario*/}
            <Route path="profile" element={<Profile />} />
            {/* Rutas de curso*/}
            <Route path="courses" element={<Courses />} />
            <Route path="courses/create" element={<CreateCourses />} />
            <Route path="courses/:id" element={<SingleCourse />} />
            <Route path="courses/:id/edit" element={<EditCourse />} />
          </Route>
          {/* Rutas de Usuario*/}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
