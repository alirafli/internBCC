import styled from "styled-components";
import { Link } from "react-router-dom";
import UserIcon from "../../media/img/userProfile.svg";

export const Container = styled.div`
  display: flex;
  margin: 5rem 8rem;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: #222222;
`;
export const HeaderText = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #000000;
  width: 25rem;
`;
export const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.03em;
`;

export const NavWrapper = styled.div`

  width: 30%;
`;
export const ContentWrapper = styled.div`
  width: 70%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) => (props.button ? `justify-content: flex-end;` : null)}
  ${(props) =>
    props.endss
      ?( `border-bottom-style: solid;
    border-color: rgba(34, 34, 34, 0.1); padding-bottom: 2.7rem; margin-bottom: 3rem;`)
      : null}
`;

export const ProfileIcon = styled.div`
  background-image: url(${((props) => props.background)});
  margin-right: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 4.1rem;
  border-radius: 100%;
  width: 8rem;
  height: 8rem;
  background-position: center;
  background-size: cover;
`;

export const LogoutButton = styled(Link)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  text-decoration: none;

  text-align: center;
  margin-right: 10rem;
  color: #ff7a45;
  background: white;

  padding: 1rem 3rem;
  border-radius: 1rem;
  outline: none;
  border: 0.2rem solid #ff7a45;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;
