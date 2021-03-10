import React, { useState, useEffect } from "react";
import {
  NavWrapper,
  NavContainer,
  LogoWrapper,
  Logo,
  NavItem,
  LoginStyle,
  SignupStyle,
  ButtonContainer,
} from "./StyleNavbar";
import LoginPage from "../loginPage/LoginPage";
import RegisterPage from "../registerPage/RegisterPage";
import { useAuth } from "../../config/Auth";
import RestoLogo from "../../media/img/restologyLogo.svg";
import forUserLogin from "../../api/forUserLogin";

const Navbar = ({ isLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalReg, setShowModalReg] = useState(false);
  const [userData, getUserData] = useState([]);
  const { authTokens } = useAuth();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModalReg = () => {
    setShowModalReg((prev) => !prev);
  };
  const { setAuthTokens } = useAuth();

  const Logout = () => {
    setAuthTokens();
    localStorage.clear();
  };

  const fetchUserData = () => {
    forUserLogin
      .get(
        "/user/profile",
        { headers: { Authorization: `Bearer ${authTokens}` } }
      )
      .then((res) => {
        getUserData(res.data.data)
        // console.log(res.data.data)
      });
  };

  useEffect(() => {
    fetchUserData()
  },[authTokens])

  return (
    <NavWrapper>
      <NavContainer>
        <LogoWrapper to="/">
          <Logo src={RestoLogo} alt="" />
        </LogoWrapper>
        {isLoggedIn ? (
          <ButtonContainer>
            <NavItem to="#">{userData.name}</NavItem>
            <NavItem style={SignupStyle} onClick={Logout} to="/">
              Sign Out
            </NavItem>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <NavItem to="#" style={LoginStyle} onClick={openModal}>
              Sign In
            </NavItem>
            <LoginPage
              showModal={showModal}
              setShowModal={setShowModal}
              setShowModalReg={setShowModalReg}
            />
            <NavItem to="#" style={SignupStyle} onClick={openModalReg}>
              Sign Up
            </NavItem>
            <RegisterPage
              showModalReg={showModalReg}
              setShowModal={setShowModal}
              setShowModalReg={setShowModalReg}
            />
          </ButtonContainer>
        )}
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
