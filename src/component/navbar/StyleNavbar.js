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
    opacity: .8;
  }
`;

export const Logo = styled(Link)`
transition: all 0.2s;
}
&:visited {
  color: #F1F1F1;
}
&:hover {
  color: #B9B9B9;
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
  min-height: 8rem;
  background-color: #222222;
`;
