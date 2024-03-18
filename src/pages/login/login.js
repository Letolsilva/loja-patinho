import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/services";

const Login = (props) => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  /* validate
   function verify({userName, password}){
    if(condition){
      return "errpr 505"
    }
  
    return true
  }
  */

  const verify = () => {
    setUserNameError("");
    setPasswordError("");
    var hasError = false;
    if ("" === userName) {
      setUserNameError("Please enter your username");
      hasError = true;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      hasError = true;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      hasError = true;
    }
    return hasError;
  };

  const onButtonClick = async () => {
    if (verify()) {
      return;
    }
    try {
      const response = await login({ userName: userName, password: password });
      console.log(response);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={"main-container"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={userName}
          placeholder="Enter your username here"
          onChange={(ev) => setuserName(ev.target.value)}
          className={"inputBox"}
          required
        />
        <label className="error-label ">{userNameError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
          required
        />
        <label className="error-label">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer button-container"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Login"}
        />
        <input
          className={"inputButton"}
          type="button"
          onClick={() => navigate("/signup")}
          value={"Sign up"}
        />
      </div>
      <br />
    </div>
  );
};

export default Login;
