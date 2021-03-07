import styled from "styled-components";
// import { Link } from "react-router-dom";
import priceLogo from "../../media/img/price.svg";
import rateLogo from "../../media/img/rate.svg";

export const Container = styled.div`
  width: 30%;
  @media only screen and (max-width: 764px) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  padding-bottom: 2.4rem;
  ${(props) =>
    props.column
      ? `
  border-bottom: 0.1rem solid;
  border-color: rgba(34, 34, 34, 0.1);
  @media only screen and (max-width: 764px) {
    border: none;
  }
  `
      : ""}
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0 0 0 1.1rem;
  line-height: 2.2rem;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  margin-left: 1.1rem;
`;

export const Logo = styled.div`
  background-image: url(${(props) => (props.price ? priceLogo : rateLogo)});
  margin-left: ${(props) =>
    props.rate ? "0.5rem" : props.rates ? "1.1rem" : ""};
  width: 16px;
  height: 16px;
`;

export const Checkbox = styled.input`
  width: 2rem;
  height: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Responsive = styled.div`
  margin: 1rem;
`;
