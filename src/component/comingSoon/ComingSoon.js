import React from "react";
import {
  Background,
  Container,
  Title,
  Paragraph,
  Button,
  ImageRespon,
} from "./StyleComingSoon";

const comingSoon = ({ modal, setModal }) => {
  return (
    <>
      {modal ? (
        <>
          <Background>
            <Container>
              <Title>Laman Akan Segera Hadir</Title>
              <ImageRespon />
              <Paragraph>
                Restoran yang ingin menjadi partner kami sekarang dapat
                menghubungi via email dibawah ini
              </Paragraph>
              <Button onClick={() => setModal((prev) => !prev)}>close</Button>
            </Container>
          </Background>
        </>
      ) : null}
    </>
  );
};

export default comingSoon;
