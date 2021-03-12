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
import { Link } from "react-scroll";
import Footer from "../../component/footer/Footer"
import KritikDanSaran from "../../component/kritikDanSaran/KritikDanSaran"


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
        <NavWrapper>
          <div style={{ position: "sticky", top: 0 }}>
            <Link to="profile">
              <HeaderText padding>Profile</HeaderText>
            </Link>
            <Link to="bukti-pemesanan">
              <HeaderText padding> Bukti Pemesanan</HeaderText>
            </Link>
            <Link to="syarat">
              <HeaderText padding>Syarat & Ketentuan</HeaderText>
            </Link>
            <Link to="kritik">
              <HeaderText padding>Kritik & Saran</HeaderText>
            </Link>
          </div>
        </NavWrapper>
        <ContentWrapper>
          <Title id="profile">Profile</Title>
          <Wrapper>
            <ProfileIcon background={userData.image} />{" "}
            <HeaderText>{userData.name}</HeaderText>
          </Wrapper>
          <Wrapper>
            <HeaderText>Email</HeaderText>
            <Paragraph>{userData.email}</Paragraph>
          </Wrapper>
          <Wrapper>
            <HeaderText>Telepon</HeaderText>
            <Paragraph>{userData.iat}</Paragraph>
          </Wrapper>
          <Wrapper button endss>
            <LogoutButton onClick={Logout} to="/">
              Log Out
            </LogoutButton>
          </Wrapper>
          <Title id="bukti-pemesanan">Bukti Pemesanan</Title>
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
          <Title borders id="syarat">
            Syarat & Ketentuan
          </Title>
          <Paragraph>
            1. Reservasi tidak dapat dibatalkan dalam keadaan apapun
          </Paragraph>
          <Paragraph>
            2. Pembayaran dilakukan maksimum 1 jam dari pemesanan dilakukan
          </Paragraph>
          <Paragraph>
            3. Kecurangan mengenai pembayaran dan pemesanan akan mendapatkan
            sanksi
          </Paragraph>
          <Paragraph>
            4. Segala tindakan plagiarisme, bahasa yang tidak senonoh, ancaman,
            dan promosi dilarang
          </Paragraph>
          <Paragraph>
            5. Ulasan harus relevan dengan restology dan restoran - restoran
            terkait
          </Paragraph>
          <Paragraph>
            6. Apabila melanggar ketentuan - ketentuan tentang pemberian ulasan,
            maka ulasan tersebut akan dihapus
          </Paragraph>
          <Title borders id="kritik">Kritik & Saran</Title>
          <KritikDanSaran />
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default UserProfile;
