import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #F9F9F9;
  border-radius: 1rem;
  width: auto;
  padding-bottom: 3rem;
  padding-top: 3rem
`;
export const Left = styled.div`
  background: #ff7a45;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  padding: 3rem;
`;
export const Right = styled.div`
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  width: 92rem;
  height: 34rem;
  padding: 3rem;
`;
export const NamaResto = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;

  color: #222222;
`;
export const Paragraph = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  color: #222222;
  ${(props) =>
    props.sizess
      ? `width: 33.9rem; padding: 3rem; background: white; margin: 3.32rem -3rem -3rem -3rem;`
      : null}
`;
export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #222222;
`;

export const Wrapper = styled.div`
  padding-bottom: 3rem;
`;
