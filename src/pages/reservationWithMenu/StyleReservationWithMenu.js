import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

export const TitleOne = styled.h1`
text-align: ${((props) => props.tengah ?"center" : null)};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin: ${(props) =>
    props.space ? "2.3rem" : props.bottom ? ".7rem" : null};
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
  grid-template-areas: "menuResto menuResto menuResto pemesanan";
  @media only screen and (max-width: 808px) {
    grid-template-areas:
      "menuResto"
      "pemesanan";
    margin-top: 20rem;
  }
  @media only screen and (max-width: 451px) {
    margin-top: 30rem;
  }
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
  border-style: solid;
  border-color: #222222;
  border-radius: 1rem;
  outline: none;
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

export const LocateWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-style: solid;
  border-color: #222222;
  border-radius: 1rem;
`;

export const Select = styled.select`
  width: 10em;
  border: 0;
  cursor: pointer;
  outline: none;

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

export const PilihTempatWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 2rem;
`;

export const Input = styled(TextField).attrs(() => ({
  variant: "outlined",
  InputProps: { style: { fontSize: "1.8rem", fontFamily: "inherit" } },
  InputLabelProps: { style: { fontSize: "1.5rem", fontFamily: "inherit" } },
}))`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ButtonPesan = styled(Link)`
  background-color: #ff7a45;
  color: #fff;
  border: solid;
  padding: 1.3rem 0;
  width: 100%;
  margin-top: 3rem;
  font-style: normal;
  font-family: Montserrat;
  font-size: 1.8rem;
  border-radius: 1rem;
  transition: 0.2s all;
  text-decoration: none;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #e75e27;
  }
`;

export const Button2 = styled(Link)`
  background-color: white;
  color: #ff7a45;
  border: solid;
  padding: 1.3rem 0;
  width: 100%;
  margin-top: 3rem;
  font-style: normal;
  font-family: Montserrat;
  font-size: 1.8rem;
  border-radius: 1rem;
  transition: 0.2s all;
  text-decoration: none;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #f4f4f4;
    color: #e75e27;
  }
  &:disabled {
    background-color: #c4c4c4;
    cursor: auto;
  }
`;
