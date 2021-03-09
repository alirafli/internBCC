import React from "react";
import { Container, TextWrapper, Title, Paragraph } from "./StyleCulinaryCard";

const StyleCulinaryCard = ({ name, review, image, city, price, rate }) => {
  return (
    <Container image={image}>
      <TextWrapper>
        <Title>{name}</Title>
        <Paragraph>{city} {price}</Paragraph>
        <Paragraph>{rate} ({review} ulasan)</Paragraph>
      </TextWrapper>
    </Container>
  );
};

export default StyleCulinaryCard;
