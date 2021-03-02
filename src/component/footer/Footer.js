import React from "react";
import {
  Container,
  Wrapper,
  ContentWrapper,
  Title,
  Paragraph,
} from "./StyleFooter";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
      <ContentWrapper>
          <Title>PERUSAHAAN</Title>
          <Paragraph>Tentang Kami</Paragraph>
          <Paragraph>Tim</Paragraph>
          <Paragraph>Mitra Perusahaan</Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Title>KONTAK</Title>
          <Paragraph>Hubungi Kami</Paragraph>
          <Paragraph>FAQ</Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Title>MEDIA SOSIAL</Title>
        </ContentWrapper>
      
      </Wrapper>
      <Wrapper style={{ borderLeftStyle: "solid" }}>
        <ContentWrapper>
          <Title>PERUSAHAAN</Title>
          <Paragraph>Tentang Kami</Paragraph>
          <Paragraph>Tim</Paragraph>
          <Paragraph>Mitra Perusahaan</Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Title>KONTAK</Title>
          <Paragraph>Hubungi Kami</Paragraph>
          <Paragraph>FAQ</Paragraph>
        </ContentWrapper>
        <ContentWrapper>
          <Title>MEDIA SOSIAL</Title>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
