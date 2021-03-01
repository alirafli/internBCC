import React from "react";
import {
  NavWrapper,
  NavContainer,
  Logo,
  NavItem,
  LoginStyle,
  SignupStyle,
} from "./StyleNavbar";
import { AiFillBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <Logo to="/">
          <AiFillBell style={{ fontSize: "3.5rem" }} to="/" />
        </Logo>
        <div>
          <NavItem to="/signin" style={LoginStyle}>
            Sign In
          </NavItem>
          <NavItem to="/signup" style={SignupStyle}>
            Sign Up
          </NavItem>
        </div>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
