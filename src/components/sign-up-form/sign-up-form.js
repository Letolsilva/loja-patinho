import React, { useState } from "react";
import "./sign-up-form.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePassword = (password) => {
    if (password.length < 7) {
      return "Password must have at least 7 digits";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordError = validatePassword(formData.password);
    setError(passwordError);
    if (!passwordError) {
      console.log("Form submitted:", formData);
      // enviar dados para o server
    }
  };

  const { name, email, userName, password } = formData;

  return (
    <div className="sign-up-container">
      <div className="title-sign-up">
        <div>Sign Up</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="title-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className="inputBox-sign-up"
          />
        </div>
        <div className="input-container">
          <label className="title-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className="inputBox-sign-up"
          />
        </div>
        <div className="input-container">
          <label className="title-label" htmlFor="userName">
            User Name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleChange}
            required
            className="inputBox-sign-up"
          />
        </div>
        <div className="input-container">
          <label className="title-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            className="inputBox-sign-up"
          />
          {error && <div className="error-message">{error}</div>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
