import styled from "styled-components";
// import { Link } from "react-router-dom";
import Background from "../../media/img/punyaRestoran.jpg";

export const Container = styled.div`
  width: 85%;
  height: 32rem;
  background-image: url(${Background});
  margin: 7rem auto;
  display: flex;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  color: #f9f9f9;
  text-align: center;
  border-radius: 1rem;
`;

export const Title = styled.div`
  font-size: 3.6rem;
  margin-top: 6.1rem;
`;

export const Paragraph = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 1.3rem;
  line-height: 28px;
  letter-spacing: 0.03em;
`;

export const Button = styled.button`
background-color: #FF7A45;
color: #F9F9F9;
outline: none;
border: none;
margin: 3.7rem auto;
width: 27.6rem;
height: 5.7rem;
font-size: 2.4rem;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
border-radius: 1rem;
transition: 0.3s all;
&:hover {
  cursor: pointer;
  background-color: #E45319;
}
`
