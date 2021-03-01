import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div.attrs((props) => ({
  image: props.image,
}))`
  background-color: #c4c4c4;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  width: auto;
  height: 35rem;
  margin: 1.5rem 1rem;
  border-radius: 1rem;
  color: #f9f9f9;
`;

export const Title = styled.h1`
  padding: 27.4rem 0 0 3.1rem;
  font-size: 2.4rem;
`;

export const Paragraph = styled.p`
  padding: 0 0 3rem 3.1rem;
  font-size: 1.8rem;
  font-weight: normal;
`;
