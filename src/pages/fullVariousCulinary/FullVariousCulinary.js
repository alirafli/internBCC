import React from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import {
  Container,
  JumboTron,
  Title,
  Paragraph,
  Wrapper,
} from "./StyleFullVariousCulinary";
import Kopi from "../../media/img/jumboKopi.png";
import PriceAndRating from "../../component/priceAndRating/PriceAndRating";
import CompleteResto from "../../component/completeResto/CompleteResto";

const FullVariousCulinary = () => {
  return (
    <>
      <NavbarBackground />
      <Container>
        <JumboTron background={Kopi}>
          <Title>kopi</Title>
          <Paragraph>tersedia 3 restoran</Paragraph>
        </JumboTron>
        <Wrapper>
          <PriceAndRating />
          <CompleteResto />
        </Wrapper>
      </Container>
    </>
  );
};

export default FullVariousCulinary;
