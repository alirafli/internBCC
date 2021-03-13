import styled from "styled-components";

export const Container = styled.div`
  margin: 6.3rem 8rem;
`;

export const JumboTron = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  filter: drop-shadow(0 0.5rem 0.5rem rgba(34, 34, 34, 0.25));
  border-radius: 1rem;
  color: #f9f9f9;
  padding: 20.9rem 0 2.8rem 2.6rem;
  margin-bottom: 7.4rem;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 4.8rem;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;

export const Wrapper = styled.div`
  display: flex;
  @media only screen and (max-width:765px){
    flex-direction: column;
} 

`

export const RestoWrapper = styled.div`
`