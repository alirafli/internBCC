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
  bukti,
  makanMinum,
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

  const SendReservationMenu = () => {
    Restaurant.post(
      "/booking/create",
      {
        restaurantId: restoId,
        number_of_seat: people,
        datetime: date,
        time: timeReserv,
        place: inOut,
        content: comment,
        food: [makanMinum]
      },
      { headers: { Authorization: `Bearer ${authTokens}` } }
    ).then((res) => {
      console.log(res)
      console.log(makanMinum)
    })
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
                if(bukti === 1) {
                  SendReservation();
                  // console.log("satu")
                }

                if (bukti === 2) {
                  SendReservationMenu();
                  // console.log("dua")
                }
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
