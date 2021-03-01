import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 85%;
  margin: 5.7rem auto;
  border-bottom-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 0, 2rem;
`;

export const Title = styled.div`
  font-size: 2.8rem;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ff7a45;
  transition: 300ms;
  font-weight: normal;
  &:hover {
    color: #da4103;
  }
`;

export const FoodWrapper = styled.div`
  padding-bottom: 7rem;
  .slick-arrow {
    background-color: #ff7a45;
    border-radius: 100%;
    height: 6rem;
    width: 6rem;
    margin: 0 2.6rem;
    z-index: 99;
    box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  }
  .slick-disabled {
    display: none !important;
  }
`;
