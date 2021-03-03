import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import closeButton from "../../media/img/closeButton.png"

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  width: 53rem;
  border-radius: 1rem;
  margin: 2rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  font-style: normal;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.4rem;
`;

export const Input = styled(TextField).attrs(() => ({
  variant: "outlined",
  InputProps: { style: { fontSize: "1.8rem", fontFamily: "inherit" } },
  InputLabelProps: { style: { fontSize: "1.5rem", fontFamily: "inherit" } },
}))`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const MainButton = styled.button`
  background-color: #ff7a45;
  color: #fff;
  outline: none;
  border: none;
  padding: 1.3rem 0;
  margin-top: 3rem;
  font-style: normal;
  font-family: Montserrat;
  font-size: 24px;
  line-height: 29px;
  border-radius: 1rem;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
    background-color: #e75e27;
  }
  &:disabled {
    background-color: #c4c4c4;
    cursor: auto;
  }
`;

export const Checkbox = styled.input`
  width: 3rem;
  height: 3rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.header ? "space-between;" : "flex-start"}
`;

export const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2.1rem;
  letter-spacing: 0.03em;
  margin-left: 2.7rem;

  color: #000000;
`;

export const Linked = styled(Link)`
 color: #FF7A45;
 text-decoration: none;
`

export const ExitWrapper = styled.div`
  background-image: url(${closeButton});
  background-position: center;
  background-size: cover;
  width: 4rem;
  height: 4rem;
`
// export const SecondaryButton = styled.a`
//     background-color:#022B3A;
//     font-weight:bold;
//     text-decoration:none;
//     font-size:1.5rem;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     line-height: 1.6;

//     color:#fff;
//     outline:none;
//     border:none;
//     padding:1.2rem 0;
//     border-radius:2rem;
//     transition: .2s all;
//     &:hover{
//         cursor:pointer;
//         background-color:#05668A;

//     }
// `
