import styled from "styled-components";
import AkanHadir from "../../media/img/akanHadir.svg";

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
  width: 71rem;
  height: 66rem;
  border-radius: 1rem;
  padding: 5rem;
  padding-top: 6.5rem;
  margin: 0.5rem;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: #222222;
`;

export const Paragraph = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.3rem;
  text-align: center;
  letter-spacing: 0.03em;
  color: #000000;
`;

export const Button = styled.button`
  margin-top: 3rem;
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

export const ImageRespon = styled.div`
  background-image: url(${AkanHadir});
  width: 37rem;
  height: 33rem;
  background-position: center;
  background-repeat: no-repeat;
`;
