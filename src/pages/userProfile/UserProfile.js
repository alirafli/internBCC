import React from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import {
  Container,
  Title,
  Paragraph,
  HeaderText,
  NavWrapper,
  ContentWrapper,
  Wrapper,
  ProfileIcon,
  LogoutButton,
} from "./StyleUserProfile";
import { useAuth } from "../../config/Auth";
import ReservationProofCard from "../../component/reservationProofCard/ReservationProofCard";

const UserProfile = () => {
  const { setAuthTokens } = useAuth();
  const Logout = () => {
    setAuthTokens();
    localStorage.clear();
  };
  return (
    <>
      <NavbarBackground />
      <Container>
        <NavWrapper></NavWrapper>
        <ContentWrapper>
          <Title>Profile</Title>
          <Wrapper>
            <ProfileIcon /> <HeaderText>ali</HeaderText>
          </Wrapper>
          <Wrapper>
            <HeaderText>Email</HeaderText>
            <Paragraph>example@gmail.com</Paragraph>
          </Wrapper>
          <Wrapper>
            <HeaderText>Telepon</HeaderText>
            <Paragraph>021-14045</Paragraph>
          </Wrapper>
          <Wrapper button end>
            <LogoutButton onClick={Logout} to="/">
              Log Out
            </LogoutButton>
          </Wrapper>
          <ReservationProofCard />
        </ContentWrapper>
        
      </Container>
    </>
  );
};

export default UserProfile;
