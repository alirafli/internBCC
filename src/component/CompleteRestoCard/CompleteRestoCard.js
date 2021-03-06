import React from "react";
import {
  Container,
  RestoProfile,
  ContentWrapper,
  Title,
  TextWrapper,
  Icon,
} from "./StyleCompleteRestoCard";

const CompleteRestoCard = () => {
  return (
      <Container>
        <RestoProfile />
        <ContentWrapper>
          <Title>Kopi Sam</Title>
          <TextWrapper>O O O 5 ulasan</TextWrapper>
          <TextWrapper>kopi, cepat saji . $$$</TextWrapper>
          <TextWrapper><Icon /> Jalan Sudirman, Jakarta pusat</TextWrapper>
          <TextWrapper><Icon /> 08:00 WIB - 21:00 WIB</TextWrapper>
        </ContentWrapper>
      </Container>
  );
};

export default CompleteRestoCard;
