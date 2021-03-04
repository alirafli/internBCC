import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div.attrs((props) => ({
  image: props.image,
}))`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  width: auto;
  height: 35rem;
  margin: 1.5rem 1rem;
  border-radius: 1rem;
  color: #f9f9f9;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.1);
  transition: 300ms;
  &:hover {
    margin: 0;
  }
`;

export const Title = styled.h1`
  padding: 27rem 0 0 3.1rem;
  font-size: 2.4rem;
  @media only screen and (max-width:1051px){
    font-size: 2rem;
    padding: 27.4rem 0 0 2.5rem;
    @media only screen and (max-width:712px){
      font-size: 1.6rem;
      padding: 27.4rem 0 0 1rem;
    }
    @media only screen and (max-width:481px){
      padding: 27.4rem 0 0 3.1rem;
      font-size: 2.4rem;
    }
    @media only screen and (max-width:368px){
      padding: 27.4rem 0 0 1rem;
      font-size: 1.7rem;
    }
`;

export const Paragraph = styled.p`
  padding: 0 0 3rem 3.1rem;
  font-size: 1.8rem;
  font-weight: normal;
  @media only screen and (max-width:1051px){
    padding: 0 0 3rem 2.6rem;
    @media only screen and (max-width:712px){
      padding: 0 0 3rem 1rem;
      font-size: 1.6rem;
    }
    @media only screen and (max-width:481px){
      padding: 0 0 3rem 3.1rem;
      font-size: 1.8rem;
    }
    @media only screen and (max-width:368px){
      padding: 0 0 3rem 1rem;
      font-size: 1.6rem;
    }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

