import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
  position: absolute;
  min-width: 100%;
  width: 100%;
  top: 0;
  padding: 2rem 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  width: 87%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 500px) {
    width: 95%;
  }
`;

export const NavItem = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  color: #f1f1f1;
  border-radius: 1rem;
  padding: 1rem 2.5rem;
  &:not(:last-child) {
    margin-right: 2.9rem;
  }
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 300px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export const LogoWrapper = styled(Link)`

}
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  @media only screen and (max-width: 670px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 460px) {
    max-width: 40%;
  }
`;

export const LoginStyle = {
  border: "0.2rem solid #FF7A45",
  background: "rgb(76, 175, 80, 0)",
};

export const SignupStyle = {
  backgroundColor: "#FF7A45",
  border: "0.2rem solid #FF7A45",
};

export const NavbarBackground = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 9rem;
  background-color: #222222;
`;

export const ButtonContainer = styled.div`
  @media only screen and (max-width: 540px) {
    margin-left: -5rem;
  }
  @media only screen and (max-width: 460px) {
    margin-left: -15rem;
  }
`;
