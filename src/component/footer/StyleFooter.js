import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: ${(props) => (props.copyright ? "#FF7A45" : "#222222")};
  margin-top: ${(props) => (props.copyright ? 0 : "7rem")};
  padding: ${(props) => (props.copyright ? "1rem" : "0")};
  display: flex;
  font-size: 1.6rem;
  color: #f9f9f9;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  border-color: #f9f9f9;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 5.2rem 0 5.2rem 0;
  @media only screen and (max-width: 700px) {
    width: 100%;
    border-width: 0;
    padding: 3rem 0 3rem 0;
    margin: 0;
    border-top-style: solid;
    direction: column-reverse;
  }
`;

export const ContentWrapper = styled.div`
  margin: ${(props) => (props.sosmed ? null : "1rem")};
  display: ${(props) => (props.sosmed ? "flex" : null)};
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-style: normal;
  line-height: 2rem;
  color: #ffffff;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Paragraph = styled.p`
  font-style: normal;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.03em;
  margin: 1.2rem 0 1.2rem 0;
  color: #ffffff;
`;

export const SocialMedia = styled.a`
  background-image: url(${(props) => props.image});
  cursor: pointer;
  background-position: center;
  background-size: cover;
  width: 4rem;
  height: 4rem;
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  @media only screen and (max-width: 670px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 460px) {
    max-width: 40%;
  }
`;