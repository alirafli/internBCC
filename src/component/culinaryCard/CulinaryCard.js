import React from "react";
import { 
  Container, 
  TextWrapper,
Title,
Paragraph} from "./StyleCulinaryCard";

const StyleCulinaryCard = ({ name }) => {
  return (
    <Container>
      <TextWrapper>
        <Title>pizza hat</Title>
        <Paragraph>cepat saji $$$$</Paragraph>
        <Paragraph>`0 0 0 0 0 (5 ulasan)`</Paragraph>
      </TextWrapper>
    </Container>
  );
};

export default StyleCulinaryCard;
