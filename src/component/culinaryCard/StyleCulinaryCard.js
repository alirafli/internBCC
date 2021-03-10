import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  color: #222222;
  max-width: 28.5rem;
  height: 23rem;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  margin: 1.4rem 1.5rem;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.1);
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-end;
  transition: 300ms;
  &:hover {
    height: 20rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 28.5rem;
  height: 9.1rem;
  display: flex;
  padding-left: 1rem;
  padding-top: 1rem;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 0 0 1rem 1rem;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  @media only screen and (max-width: 1060px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.4rem;
  @media only screen and (max-width: 708px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
