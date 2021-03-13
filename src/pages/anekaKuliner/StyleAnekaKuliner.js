import styled from "styled-components";

export const Container = styled.div`
  margin: 6.3rem 8rem;
`;

export const Title = styled.div`
  font-size: 2.8rem;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
