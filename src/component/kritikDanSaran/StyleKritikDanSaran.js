import styled from "styled-components";
// import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
`;

export const TextContent = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  letter-spacing: -0.04em;
  color: #000000;
  padding: 2rem;
`;

export const Left = styled.div`
  width: 30%;
`;
export const Right = styled.div`
  width: 70%;
`;

export const Input = styled(TextField).attrs(() => ({
  variant: "outlined",
  InputProps: { style: { fontSize: "1.6rem", fontFamily: "inherit" } },
  InputLabelProps: { style: { fontSize: "1.5rem", fontFamily: "inherit" } },
}))`
  width: 100%;
  border-radius-1rem;
`;

export const Space = styled.div`
  margin: 1.5rem 0 1.5rem 0;
  display: flex;
  ${(props) => (props.btn ? "justify-content: flex-end;" : null)}
`;

export const Button = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-align: center;
  outline: none;
  border: none;
  background: #ff7a45;
  border-radius: 1rem;
  padding: 1rem 2rem;
  color: #f9f9f9;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    background-color: #e75e27;
  }

`;
