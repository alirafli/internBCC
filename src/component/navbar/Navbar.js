import React, { useState, useEffect } from "react";
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
import {useAuth} from "../../config/Auth"
import forUserLogin from "../../api/forUserLogin"

const Navbar = ({ isLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalReg, setShowModalReg] = useState(false);
  const [UserName, setUserName] = useState("");

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModalReg = () => {
    setShowModalReg((prev) => !prev);
  };

  const {setAuthTokens} = useAuth();

  const Logout =() => {
    setAuthTokens()
    localStorage.clear()
  }

  const count = 2;

  const fetchUserName = async () => {
    const res = await forUserLogin.get(`/user/${count}`);
    setUserName(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <NavWrapper>
      <NavContainer>
        <Logo to="/">
          <AiFillBell style={{ fontSize: "3.5rem" }} to="/" />
        </Logo>
        {isLoggedIn ? (
          <div>
            <NavItem>{UserName.name}</NavItem>
            <NavItem style={SignupStyle} onClick={Logout} to="/">Sign Out</NavItem>
          </div>
        ) : (
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
        )}
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
