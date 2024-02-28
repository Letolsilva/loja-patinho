import React from "react";
import "./menuDropdown.css";
import { useNavigate } from "react-router-dom";
import LoginIcon from "../../assets/icons/login.svg";
//import LogoutIcon from "../../assets/icons/logout.svg";
import RegisterIcon from "../../assets/icons/register.svg";
import DuckIcon from "../../assets/white-logo-icon.svg";

const dropdownItens = [
  {
    icon: LoginIcon,
    description: "Login",
    path: "/login",
  },
  {
    icon: RegisterIcon,
    description: "Sign up",
    path: "/signup",
  },
  {
    icon: DuckIcon,
    description: "About duckUS",
    path: "/about-us",
  },
];
const MenuDropdownItem = ({ icon, description, path }) => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(path);
  }
  return (
    <div
      className="menu-dropdown-item"
      onClick={() => {
        handleNavigate();
      }}
    >
      <img
        className="dropdown-menu-icon"
        src={icon}
        alt="dropdown-menu-icon"
      ></img>
      <div className="dropdown-menu-description">{description}</div>
    </div>
  );
};
const MenuDropdown = ({ isActive }) => {
  return (
    <div className={`menu-dropdown ${isActive ? "active" : ""}`}>
      <div className="dropdown-content">
        {dropdownItens.map((item, index) => (
          <MenuDropdownItem
            key={index}
            icon={item.icon}
            description={item.description}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
