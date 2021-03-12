import styled from "styled-components";
import closeButton from "../../../media/img/closeButton.png";
import Ovo from "../../../media/img/ovo.svg";
import Gopayy from "../../../media/img/gopay.svg";
import Dana from "../../../media/img/dana.svg";

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
  background: #ffffff;
  width: 65rem;
  height: 50rem;
  border-radius: 1rem;
  padding: 5rem;
  margin: 0.5rem;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: #222222;
`;
export const Paragraph = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #ff7a45;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: #ff7a45;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  border-radius: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  padding: 1.5rem;
  transition: 300ms;

  color: #f9f9f9;
  &:hover {
    cursor: pointer;
    background-color: #e75e27;
  }
`;

export const ExitWrapper = styled.div`
  background-image: url(${closeButton});
  cursor: pointer;
  background-position: center;
  background-size: cover;
  width: 4rem;
  height: 4rem;
  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.left ? "flex-start" : "space-between")};
  padding-bottom: ${(props) => (props.left ? "4rem" : "1rem")};
`;

export const ContentWrapper = styled.div``;

export const IconOvo = styled.div`
  background-image: url(${Ovo});
  cursor: pointer;
  background-position: center;
  background-size: cover;
  width: 14rem;
  height: 6rem;
`;

export const IconGopay = styled.div`
  background-image: url(${Gopayy});
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  width: 20rem;
  height: 4rem;
  margin-left: -0.6rem;
`;

export const IconDana = styled.div`
  background-image: url(${Dana});
  cursor: pointer;
  background-position: center;
  width: 20rem;
  height: 5rem;
  margin-left: -1.5rem;
  background-repeat: no-repeat;
`;
