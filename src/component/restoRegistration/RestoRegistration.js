import React, { useState } from "react";
import { Container, Title, Paragraph, Button } from "./StyleRestoRegistration";

const RestoRegistration = ({ setControl, openModal }) => {
  return (
    <Container data-aos-once="true" data-aos="fade-up">
      <Title>Memiliki restoran?</Title>
      <Paragraph>Bergabunglah menjadi mitra kami. </Paragraph>
      <Button
        onClick={() => {
          setControl((prev) => !prev);
          openModal();
        }}
      >
        Pelajari Lanjut
      </Button>
    </Container>
  );
};

export default RestoRegistration;
