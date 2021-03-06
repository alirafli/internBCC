import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 23rem;
  background-color: #e0e0e0;
  border-radius: 1rem;
  margin: 1.4rem 3.216rem;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.1);
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TextWrapper = styled.div`
  width: auto;
  height: 9.1rem;
  display: flex;
  padding-left: 1rem;
  padding-top: 1rem;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 0 0 1rem 1rem;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;
