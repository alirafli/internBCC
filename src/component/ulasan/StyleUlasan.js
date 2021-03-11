import styled from "styled-components";
// import { Link } from "react-router-dom";
import Background from "../../media/img/userProfile.svg";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  background: #f9f9f9;
  width: 100%;
  margin-top: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin-bottom: 2rem;
`;

export const Comment = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.6rem;
  letter-spacing: 0.03em;
  color: #000000;
  margin-bottom: 2rem;
  margin-left: 4.9rem;
`;

export const UserName = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${(props) => (props.date ? "rgba(34, 34, 34, 0.5)" : "#222222")};
  padding-left: 1rem;
`;

export const Profile = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  width: 4rem;
  height: 4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom-style: solid;
  border-color: rgba(34, 34, 34, 0.1);
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NameDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Input = styled(TextField).attrs(() => ({
  variant: "outlined",
  InputProps: { style: { fontSize: "1.8rem", fontFamily: "inherit" } },
  InputLabelProps: { style: { fontSize: "1.5rem", fontFamily: "inherit" } },
}))`
  width: 100%;
`;

export const SubmitButton = styled.button`
  margin: 0 2rem;
  padding: 1.2rem 3rem;
  transition: 300ms;
  background: #ff7a45;
  border: none;
  color: #f9f9f9;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.extra ? "#f4f4f4" : "#e75e27")};
    color: ${(props) => (props.extra ? "#e75e27" : "")};
  }
`;
