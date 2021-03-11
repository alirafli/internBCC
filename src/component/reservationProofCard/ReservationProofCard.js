import React, { useState, useEffect } from "react";
import {
  Container,
  Left,
  Right,
  NamaResto,
  Paragraph,
} from "./StyleReservationProofCard";
import { useAuth } from "../../config/Auth";
import forUserLogin from "../../api/forUserLogin";

const ReservationProofCard = () => {
  const [reservation, getReservation] = useState([]);
  const [userData, getUserData] = useState([]);
  const { authTokens } = useAuth();

  useEffect(() => {
    const fetchReservationProof = () => {
      forUserLogin
        .get(`/booking/find/${userData.id}`, {
          headers: { Authorization: `Bearer ${authTokens}` },
        })
        .then((res) => {
          getReservation(res.data.data);
          console.log(res.data.data);
        });
    };
    authTokens && fetchReservationProof();
  }, [authTokens]);

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
    <Container>
      <Left>
        <NamaResto>Kopi Sam</NamaResto>
        <Paragraph>Jalan Sudirman, Jakarta Pusat</Paragraph>
        <Paragraph>Telepon : 021 - 14045</Paragraph>
        <Paragraph></Paragraph>
      </Left>
      <Right></Right>
    </Container>
  );
};

export default ReservationProofCard;
