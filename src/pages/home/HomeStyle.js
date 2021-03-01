import styled from "styled-components";
import backgroundImage from "../../media/img/homepage.jpg";

export const Container = styled.div`
  background-image: url(${backgroundImage});
  height: 70rem;
  padding: 5rem;
  display: flex;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  color: #f9f9f9;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  margin-top: -1rem;
  font-style: normal;
  font-size: 6.4rem;
  color: #f9f9f9;
`;

export const ReserveDiv = styled.div`
  background-color: #fff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin: 0 auto;
  weight: 600;
`;
