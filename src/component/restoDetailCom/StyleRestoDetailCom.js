import styled from "styled-components";
// import { Link } from "react-router-dom";

export const TitleOne = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  ${(props) => (props.space ? "margin: 2.3rem" : null)};
`;

export const ParagraphOne = styled.p`
  margin-top: ${((props) => props.none ? "0" : "1.3rem")};
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.03em;
`;

export const Information = styled.div`
  display: grid;
  grid-template-areas: "detail detail score";
  grid-gap: 1.7rem;
  height: 40rem;
  margin-top: 6rem;
  @media only screen and (max-width: 808px) {
    grid-template-areas:
      "detail"
      "score";
  }
`;

export const Detail = styled.div`
box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  grid-area: detail;
  display: grid;
  grid-template-areas:
    "detailUp detailMaps"
    "detailDown detailMaps";
    background: #F9F9F9
  grid-gap: 1.7rem;
  border-radius: 1rem;
  padding: 1.7rem;
`;

export const DetailUp = styled.div`
  grid-area: detailUp;
  background: #f9f9f9;
`;
export const DetailDown = styled.div`
  grid-area: detailDown;
  background: #f9f9f9;
`;
export const DetailMaps = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: detailMaps;
  background: #f9f9f9;
`;

export const Maps = styled.div`
  width: 24.7rem;
  height: 17rem;
  background: red;
  @media only screen and (max-width: 497px) {
    width: 15rem;
    height: 10rem;
  }
`;

export const Score = styled.div`
box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
padding: 2rem 3rem;
background: #f9f9f9;
  grid-area: score;
  background: #F9F9F9
  border-radius: 1rem;
  border-radius: 1rem;
`;

export const Salin = styled.button`
  border: 0.2rem solid #ff7a45;
  background: rgb(76, 175, 80, 0);
  margin-top: 2rem;
  outline: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  color: #ff7a45;
  border-radius: 1rem;
  line-height: 1.7rem;
  padding: 1rem 3rem 1rem 3rem;
  margin: 2rem 1.3rem;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    color: #fc6327;
    border: 0.2rem solid #fc6327;
    padding: 1.2rem 3.2rem 1.2rem 3.2rem;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;
