import React, { useState, useEffect } from "react";
import {
  Container,
  Left,
  Right,
  NamaResto,
  Paragraph,
  Title,
  Wrapper,
} from "./StyleReservationProofCard";
import forUserLogin from "../../api/forUserLogin";

const ReservationProofCard = ({
  content,
  seat,
  place,
  date,
  time,
  restoranId,
  bookingId,
}) => {
  const [restoDetail, getRestoDetail] = useState([]);
  const restoId = restoranId;

  useEffect(() => {
    const fetchRestoDetail = async () => {
      const res = await forUserLogin.get(`/restaurants/${restoId}`);
      getRestoDetail(res.data.data);
      // console.log(res.data.data);
    };
    fetchRestoDetail();
  }, [restoId]);
  return (
    <>
      <Container>
        <Left>
          <Wrapper>
            <NamaResto>{restoDetail.name}</NamaResto>
            <Paragraph>{restoDetail.address}</Paragraph>
            <Paragraph>Telepon : {restoDetail.phone}</Paragraph>
          </Wrapper>
          <Wrapper>
            <Paragraph>{time}</Paragraph>
            <Paragraph>{date}</Paragraph>
            <Paragraph>{seat} Orang</Paragraph>
          </Wrapper>
          <Paragraph sizess>
            Perlihatkan bukti ini kepada pihak restoran, sebagai konfirmasi
            bukti reservasi.
          </Paragraph>
        </Left>
        <Right>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <h2>Booking id: {bookingId}</h2>
          </div>
          <Wrapper>
            <Title>Catatan Permintaan</Title>
            <Paragraph>- {place}</Paragraph>
            <Paragraph>- {content}</Paragraph>
          </Wrapper>
          <Wrapper>
            <Title>Pesanan</Title>
            <Paragraph>Tidak ada menu yang dipesan</Paragraph>
          </Wrapper>
        </Right>
      </Container>
    </>
  );
};

export default ReservationProofCard;
