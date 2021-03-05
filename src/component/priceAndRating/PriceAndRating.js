import React from "react";
import {
  Container,
  PriceWrapper,
  Paragraph,
  Title,
  Logo,
  Checkbox,
  ContentWrapper,
} from "./StylePriceAndRating";

const PriceAndRating = () => {
  return (
    <Container>
      <PriceWrapper>
        <Logo price />
        <Title>Harga</Title>
      </PriceWrapper>
      <PriceWrapper column>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Paragraph>{`$ (< 25000 IDR)`}</Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Paragraph>{`$$$$ (> 150000 IDR)`}</Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Paragraph>{`$$$ (75000 - 150000 IDR)`}</Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Paragraph>{`$$ (25000 - 75000 IDR)`}</Paragraph>
        </ContentWrapper>
      </PriceWrapper>

      <PriceWrapper  style={{ marginTop: "1.8rem" }}>
        <Logo rate />
        <Title>Rating</Title>
      </PriceWrapper>
      <PriceWrapper column>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Logo rates/>
        </ContentWrapper>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Logo rates/>
          <Logo rate />
        </ContentWrapper>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Logo rates/>
          <Logo rate />
          <Logo rate />
        </ContentWrapper>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Logo rates/>
          <Logo rate />
          <Logo rate />
          <Logo rate />
        </ContentWrapper>
        <ContentWrapper>
          <Checkbox type="checkbox" />
          <Logo rates/>
          <Logo rate />
          <Logo rate />
          <Logo rate />
          <Logo rate />
        </ContentWrapper>
      </PriceWrapper>
    </Container>
  );
};

export default PriceAndRating;
