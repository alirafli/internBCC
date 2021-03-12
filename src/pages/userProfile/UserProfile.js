import React, { useState, useEffect } from "react";
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
import forUserLogin from "../../api/forUserLogin";

const UserProfile = () => {
  const { setAuthTokens } = useAuth();
  const [reservation, getReservation] = useState([]);
  const [userData, getUserData] = useState([]);
 

  const { authTokens } = useAuth();
  const userId = userData.id;

  const Logout = () => {
    setAuthTokens();
    localStorage.clear();
  };


  useEffect(() => {
    const fetchReservationProof = () => {
      forUserLogin
        .get(`/booking/find/${userId}`, {
          headers: { Authorization: `Bearer ${authTokens}` },
        })
        .then((res) => {
          getReservation(res.data.data);
          // console.log(res.data.data);
        });
    };
    authTokens && fetchReservationProof();
  }, [authTokens, userId]);

  useEffect(() => {
    const fetchUserData = () => {
      forUserLogin
        .get("/user/profile", {
          headers: { Authorization: `Bearer ${authTokens}` },
        })
        .then((res) => {
          getUserData(res.data.data);
          // console.log(res.data.data);
        });
    };
    authTokens && fetchUserData();
  }, [authTokens]);
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
          <Wrapper button endss>
            <LogoutButton onClick={Logout} to="/">
              Log Out
            </LogoutButton>
          </Wrapper>
          <Title>Bukti Pemesanan</Title>
          {reservation.map((props) => (
            <ReservationProofCard
            content={props.content}
            key={props.restaurantId}
            seat={props.number_of_seat}
            place={props.place}
            date={props.datetime}
            time={props.time}
            restoranId={props.restaurantId}
            />
          ))}
        </ContentWrapper>
      </Container>
    </>
  );
};

export default UserProfile;
