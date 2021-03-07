import React from "react";
import { Container, TextWrapper, Title, Paragraph } from "./StyleCulinaryCard";

const StyleCulinaryCard = ({ name, content, count }) => {
  return (
    <Container>
      <TextWrapper>
        <Title>{name}</Title>
        <Paragraph>Indonesia, Nasi</Paragraph>
        <Paragraph>`0 0 0 0 0 (2 ulasan)`</Paragraph>
      </TextWrapper>
    </Container>
  );
};

export default StyleCulinaryCard;
