import styled from "styled-components";
// import { Link } from "react-router-dom";
import Gps from "../../media/img/gps.svg";
import Clock from "../../media/img/clock.svg";

export const Container = styled.div`
  display: flex;
  margin: ${((props) => props.top == 1 ? `0` : `3rem`)} 0 3rem 0;
  
`;

export const RestoProfile = styled.div`
  background: green;
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #222222;
  margin-bottom: 0.4rem;
`;
export const TextWrapper = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  letter-spacing: 0.03em;
  padding: 0.8rem 0 0.8rem 0;
  ${(props) =>
    props.underline ? `border-bottom: 1px solid rgba(34, 34, 34, 0.1);` : ``}
`;
export const ContentWrapper = styled.div`
  margin-left: 1.4rem;
  width: auto;
`;

export const Icon = styled.div`
  background-image: url(${(props) => (props.gps ? Gps : Clock)});
  background-position: center;
  background-size: cover;
  width: 19px;
  height: 19px;
  margin-right: 1.4rem;
`;

export const Dots = styled.span`
    margin: 0 1rem;
`