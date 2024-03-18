import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/homepage";
import Login from "../pages/login/login";
import SignUp from "../components/sign-up-form/sign-up-form";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRouter;
