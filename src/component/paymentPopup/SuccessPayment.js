import React from "react";
import {
  Background,
  Container,
  Title,
  Paragraph,
  Button,
  Button2,
  SuccessImg,
} from "./style/StSuccessPayment";

const SuccessPayment = ({ payResult, setPayResult }) => {
  return (
    <>
      {payResult ? (
        <Background>
          <Container>
            <Title>Hore, Reservasi Berhasil</Title>
            <SuccessImg/>
            <Paragraph>
              Terima Kasih telah menggunakan layanan kami, restoran akan
              menunggu kedatanganmu sesuai dengan waktu pemesanan tempat
            </Paragraph>
            <Button to="/user-profile"
              onClick={() => {
                setPayResult((prev) => !prev);
              }}
            >
              Melihat bukti pemesanan
            </Button>
            <Button2 to="/">Melanjutkan cari restoran</Button2>
          </Container>
        </Background>
      ) : null}
    </>
  );
};

export default SuccessPayment;
