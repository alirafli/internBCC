import styled from "styled-components";
import backgroundImage from "../../media/img/homepage.jpg";

export const Container = styled.div`
  background-image: url(${backgroundImage});
  height: 70rem;
  padding: 5rem;
  display: flex;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  color: #f9f9f9;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  margin-top: -2rem;
  font-style: normal;
  font-size: 6.4rem;
  color: #f9f9f9;
  @media only screen and (max-width: 532px) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 371px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.h1`
  margin-top: 1rem;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 3.6rem;
  @media only screen and (max-width: 532px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 371px) {
    font-size: 2rem;
  }
`;

export const ReserveDiv = styled.div`
  background-color: #fff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin: 0 auto;
  weight: 600;
`;

export const Animation = styled.div`
  width: 65.8rem;
  height: 7.9rem;
  margin: -1rem auto;
  @media only screen and (max-width: 515px) {
    width: 40.8rem;
    height: 7.9rem;
  }
  @media only screen and (max-width: 371px) {
    width: 30.8rem;
    height: 7.9rem;
  }
  @media only screen and (max-width: 296px) {
    width: 30.8rem;
    height: 7.9rem;
  }
`;
