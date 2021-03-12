import React from "react";
import {
  Background,
  Container,
  Title,
  Paragraph,
  Button,
  ImageRespon,
} from "./StyleKritikSaran";

const KritikSaran = ({ modal, setModal }) => {
  return (
    <>
      {modal ? (
        <Background>
          <Container>
            <Title>Kritik & Saran Telah Terkirim</Title>
            <ImageRespon />
            <Paragraph>
              Terima kasih telah mengirimkan kritik dan saran agar layanan kami
              semakin baik untuk selanjutnya
            </Paragraph>
            <Button
              onClick={() => {
                setModal((prev) => !prev);
              }}
            >
              Kembali ke laman profile
            </Button>
          </Container>
        </Background>
      ) : null}
    </>
  );
};

export default KritikSaran;
