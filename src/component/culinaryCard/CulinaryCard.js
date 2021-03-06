import React from "react";
import { 
  Container, 
  TextWrapper,
Title,
Paragraph} from "./StyleCulinaryCard";

const StyleCulinaryCard = ({ name, content, count }) => {
  return (
    <Container>
      <TextWrapper>
        <Title>{name}</Title>
        <Paragraph>{content}</Paragraph>
        <Paragraph>`0 0 0 0 0 ({count} ulasan)`</Paragraph>
      </TextWrapper>
    </Container>
  );
};

export default StyleCulinaryCard;
