import React, { useState } from "react";
import "./header.css";
import LogoIcon from "../../assets/logo-icon.svg";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import { useNavigate } from "react-router-dom";
import MenuDropdown from "../menuDropdown/menuDropdown";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }

  function handleToggleActive() {
    setIsActive(!isActive);
  }
  return (
    <>
      <div className="header">
        <div className="header-content">
          <img
            className="logo-icon"
            src={LogoIcon}
            alt="logo-icon"
            onClick={() => handleNavigate()}
          ></img>
          <img className="logo" src={Logo} alt="logo"></img>
          <img
            className="menu-icon"
            src={MenuIcon}
            alt="menu-icon"
            onClick={() => handleToggleActive()}
          ></img>
        </div>
      </div>
      <MenuDropdown isActive={isActive} />
    </>
  );
};

export default Header;
