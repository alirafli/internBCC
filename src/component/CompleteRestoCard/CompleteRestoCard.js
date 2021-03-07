import React from "react";
import {
  Container,
  RestoProfile,
  ContentWrapper,
  Title,
  TextWrapper,
  Icon,
  Dots,
} from "./StyleCompleteRestoCard";

const CompleteRestoCard = ({top}) => {
  return (
      <Container top={top}>
        <RestoProfile />
        <ContentWrapper>
          <Title>Kopi Sam</Title>
          <TextWrapper>O O O 5 ulasan</TextWrapper>
          <TextWrapper underline>kopi, cepat saji <Dots> . </Dots> $$$</TextWrapper>
          <TextWrapper><Icon gps/> Jalan Sudirman, Jakarta pusat</TextWrapper>
          <TextWrapper><Icon clock/> 08:00 WIB - 21:00 WIB</TextWrapper>
        </ContentWrapper>
      </Container>
  );
};

export default CompleteRestoCard;
