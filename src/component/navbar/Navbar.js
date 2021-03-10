import React, { useState} from "react";
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
// import forUserLogin from "../../api/forUserLogin";

const Navbar = ({ isLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalReg, setShowModalReg] = useState(false);
  // const [UserName, setUserName] = useState([]);

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

  // const count = 2;

  // const fetchUserName = async () => {
  //   const res = await forUserLogin.get(`/user/${count}`);
  //   setUserName(res.data);
  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   fetchUserName();
  // }, []);

  return (
    <NavWrapper>
      <NavContainer>
        <LogoWrapper to="/">
          <Logo src={RestoLogo} alt="" />
        </LogoWrapper>
        {isLoggedIn ? (
          <ButtonContainer>
            <NavItem to="#">Berhasil Login</NavItem>
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
