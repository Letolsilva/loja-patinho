import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/homepage";
import Login from "../pages/login/login";
import SignUp from "../components/sign-up-form/sign-up-form";

const AppRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <Routes>
      <Route path="/" element={<HomePage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRouter;
