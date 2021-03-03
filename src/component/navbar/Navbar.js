import React, { useState } from "react";
import {
  NavWrapper,
  NavContainer,
  Logo,
  NavItem,
  LoginStyle,
  SignupStyle,
} from "./StyleNavbar";
import { AiFillBell } from "react-icons/ai";
import LoginPage from "../loginPage/LoginPage";
import RegisterPage from "../registerPage/RegisterPage";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalReg, setShowModalReg] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModalReg = () => {
    setShowModalReg((prev) => !prev);
  };

  return (
    <NavWrapper>
      <NavContainer>
        <Logo to="/">
          <AiFillBell style={{ fontSize: "3.5rem" }} to="/" />
        </Logo>
        <div>
          <NavItem style={LoginStyle} onClick={openModal}>
            Sign In
          </NavItem>
          <LoginPage
            showModal={showModal}
            setShowModal={setShowModal}
            setShowModalReg={setShowModalReg}
          />
          <NavItem style={SignupStyle} onClick={openModalReg}>
            Sign Up
          </NavItem>
          <RegisterPage
            showModalReg={showModalReg}
            setShowModal={setShowModal}
            setShowModalReg={setShowModalReg}
          />
        </div>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
