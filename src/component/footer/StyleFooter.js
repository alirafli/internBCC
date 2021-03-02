import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #222222;
  margin-top: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  width: 45%;
  border-color: #f9f9f9;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 5.2rem 0 5.2rem 0;
  @media only screen and (max-width: 700px) {
    width: 100%;
    border-width: 0;
    padding: 3rem 0 3rem 0;
    margin: 0;
        border-top-style: solid;
  }
`;

export const ContentWrapper = styled.div`
  padding: 1rem;
`;

export const Title = styled.h1`
  size: 1.6rem;
  font-style: normal;
  line-height: 2rem;
  color: #ffffff;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.03em;
  margin: 1.2rem 0 1.2rem 0;
  color: #ffffff;
`;
