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

const CompleteRestoCard = ({
  name,
  address,
  rate,
  dollar,
  review,
  restoId,
  city,
  background,
}) => {
  return (
    <Container>
      <RestoProfile background={background}/>
      <ContentWrapper>
        <Title>{name}</Title>
        <TextWrapper>@ @ @ {review} ulasan</TextWrapper>
        <TextWrapper underline>
          {city} <Dots> . </Dots> $$$$
        </TextWrapper>
        <TextWrapper>
          <Icon gps />
          {address}
        </TextWrapper>
        <TextWrapper>
          <Icon clock /> 08:00 WIB - 21:00 WIB
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default CompleteRestoCard;
