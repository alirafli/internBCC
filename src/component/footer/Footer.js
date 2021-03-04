import React from "react";
import {
  Container,
  Wrapper,
  ContentWrapper,
  Title,
  Paragraph,
  SocialMedia,
} from "./StyleFooter";
import Instagram from "../../media/img/instagram.png";
import Twitter from "../../media/img/twitter.png";
import Facebook from "../../media/img/facebook.png";
import Youtube from "../../media/img/youtube.png";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>INI LOGO</Title>
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
          <ContentWrapper sosmed>
            <SocialMedia image={Instagram} />
            <SocialMedia image={Twitter} />
            <SocialMedia image={Facebook} />
            <SocialMedia image={Youtube} />
          </ContentWrapper>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
