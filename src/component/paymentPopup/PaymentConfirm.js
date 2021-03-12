import React from "react";
import {
  Background,
  Container,
  Title,
  Paragraph,
  Button,
  Button2,
} from "./style/StPaymentConfirm";
import Restaurant from "../../api/forUserLogin";
import { useAuth } from "../../config/Auth";

const PaymentConfirm = ({
  payConfirm,
  setPayConfirm,
  setPayChoose,
  setPayResult,
  date,
  timeReserv,
  people,
  comment,
  inOut,
  restoId,
}) => {
  const { authTokens } = useAuth();

  const SendReservation = () => {
    Restaurant.post(
      "/booking/create",
      {
        restaurantId: restoId,
        number_of_seat: people,
        datetime: date,
        time: timeReserv,
        place: inOut,
        content: comment,
      },
      { headers: { Authorization: `Bearer ${authTokens}` } }
    );
  };

  return (
    <>
      {payConfirm ? (
        <Background>
          <Container>
            <Title>Konfirmasi Pemesanan</Title>
            <Paragraph>
              Apakah anda yakin untuk melakukan pemesanan? Apabila telah
              melakukan reservasi tidak dapat melakukan pembatalan
            </Paragraph>
            <Button
              onClick={() => {
                setPayConfirm((prev) => !prev);
                setPayChoose((prev) => !prev);
              }}
            >
              Tidak, kembali ke laman restoran
            </Button>
            <Button2
              onClick={() => {
                setPayConfirm((prev) => !prev);
                setPayResult((prev) => !prev);
                SendReservation();
              }}
            >
              Ya, lanjutkan ke pembayaran
            </Button2>
          </Container>
        </Background>
      ) : null}
    </>
  );
};

export default PaymentConfirm;
