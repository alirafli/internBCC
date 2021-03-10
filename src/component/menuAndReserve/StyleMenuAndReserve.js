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
  margin-top: 1.3rem;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 1.6rem;
  letter-spacing: 0.03em;
  margin: 1.5rem 0;
`;

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-areas:
    "menuResto menuResto menuResto pemesanan"
    "null null null pemesanan";
`;

export const MenuResto = styled.div`
  grid-area: menuResto;
  margin: 1rem;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  background: #f9f9f9;
  padding: 3rem;
`;

export const Pemesanan = styled.div`
  grid-area: pemesanan;
  margin: 1rem;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  background: #f9f9f9;
  padding: 2rem;
`;

export const DatePick = styled.input`
  width: 100%;
  margin-top: 3rem;
  padding: 0.6rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TimeReserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleWrapper = styled.div`
  margin: 5rem 0;
`;

export const LocateWrapper = styled.div``;
export const Select = styled.select`
  width: 10em;
  border: 0;
  cursor: pointer;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #222222;
`;
export const Option = styled.option`
  color: #222222;
  border: 0;
`;
