import React from "react";
import {
  Container,
  Wrapper,
  ContentWrapper,
  Title,
  Paragraph,
  SocialMedia,
  Logo,
} from "./StyleFooter";
import Instagram from "../../media/img/instagram.png";
import Twitter from "../../media/img/twitter.png";
import Facebook from "../../media/img/facebook.png";
import RestoLogo from "../../media/img/restologyLogo.svg";
import Youtube from "../../media/img/youtube.png";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo src={RestoLogo} alt="" />
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
              <SocialMedia
                image={Instagram}
                href="https://instagram.com/"
                target="_blank"
              />
              <SocialMedia
                image={Twitter}
                href="https://twitter.com/"
                target="_blank"
              />
              <SocialMedia
                image={Facebook}
                href="https://facebook.com/"
                target="_blank"
              />
              <SocialMedia
                image={Youtube}
                href="https://youtube.com/"
                target="_blank"
              />
            </ContentWrapper>
          </ContentWrapper>
        </Wrapper>
      </Container>
      <Container copyright>restology.com. All Rights Reserved.</Container>
    </>
  );
};

export default Footer;
