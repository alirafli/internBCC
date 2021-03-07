import React from "react";
import {
  Container,
  PriceWrapper,
  Paragraph,
  Title,
  Logo,
  Checkbox,
  ContentWrapper,
  Responsive,
} from "./StylePriceAndRating";

const PriceAndRating = () => {
  return (
    <Container>
      <Responsive>
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
            <Paragraph>{`$$ (25000 - 75000 IDR)`}</Paragraph>
          </ContentWrapper>
          <ContentWrapper>
            <Checkbox type="checkbox" />
            <Paragraph>{`$$$ (75000 - 150000 IDR)`}</Paragraph>
          </ContentWrapper>
          <ContentWrapper>
            <Checkbox type="checkbox" />
            <Paragraph>{`$$$$ (> 150000 IDR)`}</Paragraph>
          </ContentWrapper>
        </PriceWrapper>
      </Responsive>

      <Responsive>
        <PriceWrapper>
          <Logo rate />
          <Title>Rating</Title>
        </PriceWrapper>
        <PriceWrapper column>
          <ContentWrapper>
            <Checkbox type="checkbox" />
            <Logo rates />
          </ContentWrapper>
          <ContentWrapper>
            <Checkbox type="checkbox" />
            <Logo rates />
            <Logo rate />
          </ContentWrapper>
          <ContentWrapper>
            <Checkbox type="checkbox" />
            <Logo rates />
            <Logo rate />
            <Logo rate />
          </ContentWrapper>
          <ContentWrapper>
            <Checkbox type="checkbox" />
            <Logo rates />
            <Logo rate />
            <Logo rate />
            <Logo rate />
          </ContentWrapper>
          <ContentWrapper>
            <Checkbox type="checkbox" />
            <Logo rates />
            <Logo rate />
            <Logo rate />
            <Logo rate />
            <Logo rate />
          </ContentWrapper>
        </PriceWrapper>
      </Responsive>
    </Container>
  );
};

export default PriceAndRating;
