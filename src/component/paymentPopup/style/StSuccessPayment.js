import styled from "styled-components";
import Berhasil from "../../../media/img/success.svg";
import { Link } from "react-router-dom";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  width: 65rem;
  height: 73rem;
  border-radius: 1rem;
  padding: 3rem;
  margin: 0.5rem;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #222222;
  padding-bottom: 3.2rem;
  padding-top: 3rem;
`;
export const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #000000;
  padding-bottom: 6rem;
  padding-top: 3rem;
`;

export const Button = styled(Link)`
  text-decoration: none;
  outline: none;
  border: 2px solid #ff7a45;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  border-radius: 10px;
  width: 100%;
  background: white;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: 300ms;
  color: #ff7a45;
  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

export const Button2 = styled(Link)`
text-decoration: none;
  outline: none;
  border: none;
  background: #ff7a45;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  border-radius: 10px;
  width: 100%;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: 300ms;

  color: #f9f9f9;
  &:hover {
    cursor: pointer;
    background-color: #e75e27;
  }
`;

export const SuccessImg = styled.div`
  background-image: url(${Berhasil});
  width: 31rem;
  height: 27rem;
  background-position: center;
  background-size: cover;
`;
