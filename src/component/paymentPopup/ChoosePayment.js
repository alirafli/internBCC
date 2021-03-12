import React from "react";
import {
  Background,
  Container,
  Title,
  Paragraph,
  Button,
  ExitWrapper,
  Wrapper,
  ContentWrapper,
  IconOvo,
  IconGopay,
  IconDana,
} from "./style/StChoosePayment";
import RadioButton from "../priceChoice/StylePriceChoice";

const ChoosePayment = ({ payChoose, setPayChoose, setPayConfirm }) => {
  return (
    <>
      {payChoose ? (
        <Background>
          <Container>
            <Wrapper>
              <Title>pilih pembayaran</Title>
              <ExitWrapper
                onClick={() => {
                  setPayChoose((prev) => !prev);
                }}
              />
            </Wrapper>
            <Paragraph>E-Wallet</Paragraph>
            <ContentWrapper>
              <Wrapper left>
                <RadioButton key={6} label={""} name="radio" value={"ovo"} />
                <IconOvo />
              </Wrapper>
              <Wrapper left>
                <RadioButton key={6} label={""} name="radio" value={"gopay"} />
                <IconGopay />
              </Wrapper>
              <Wrapper left>
                <RadioButton key={6} label={""} name="radio" value={"dana"} />
                <IconDana />
              </Wrapper>
            </ContentWrapper>
            <Button
              onClick={() => {
                setPayChoose((prev) => !prev);
                setPayConfirm((prev) => !prev);
              }}
            >
              Melakukan Pembayaran
            </Button>
          </Container>
        </Background>
      ) : null}
    </>
  );
};

export default ChoosePayment;
