import styled from "styled-components";
import GpsIcon from "../../media/img/gpsHome.svg";
import SearchIcon from "../../media/img/searchHome.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3.9rem;
  align-items: center;
  @media only screen and (max-width: 544px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76.6rem;
  height: 6rem;
  border-radius: 1rem;
  display: flex;
  margin-right: 3.7rem;
  background: white;
  @media only screen and (max-width: 544px) {
    width: auto;
    margin-right: 0;
  }
`;

export const Button = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #f1f1f1;
  padding: 1rem;

  width: 13.4rem;
  height: 6rem;
  background-color: #ff7a45;
  border-radius: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    background-color: #e75e27;
  }
  @media only screen and (max-width: 544px) {
    margin-top: 2rem;
  }
`;

export const LocateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width 30%;
  height: 5.5rem;
  border-right-style: solid;
  border-color: #2222;

`;

export const SearchWrapper = styled.input`
  border: none;
  width: 50%;
  height: 5.5rem;
  padding: 0.5em;
  color: #222222;
  outline: none;
  border: none;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.7rem;
`;

export const Icon = styled.div`
  display: flex;
  background-image: url(${(props) => (props.gps ? GpsIcon : SearchIcon)});
  background-position: center;
  background-repeat: no-repeat;
  width: ${(props) => (props.gps ? "6%" : "10%")};
  height: 5.5rem;
  @media only screen and (max-width: 544px) {
    display: none;
  }
`;

export const Select = styled.select`
  width: 10em;
  border: 0;
  cursor: pointer;
  outline: none;
  border: none;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #222222;
`;
export const Option = styled.option`
  color: #222222;
  border: 0;
`;
