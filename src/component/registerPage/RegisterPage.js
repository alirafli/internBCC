import React, { useState } from "react";
import {
  Container,
  Wrapper,
  MainForm,
  Title,
  Input,
  MainButton,
} from "../loginPage/StyleAccountForm.js";
import forUserLogin from "../../api/forUserLogin";
import { useAuth } from "../../config/Auth";
import { Redirect } from "react-router-dom";

const RegisterPage = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleUserSignup = async (e) => {
    e.preventDefault();
    await forUserLogin.post("/user/register", {
      name: Name,
      phone: Phone,
      email: Email,
      password: Password,
    });
    await forUserLogin
      .post("user/login", {
        email: Email,
        password: Password,
      })
      .then((res) => {
        res.status == 200 && setAuthTokens(res.data.token);
        setLoggedIn(true);
      });
  };

  if (isLoggedIn) {
    return <Redirect to={"/"} />;
  }

  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <MainForm onSubmit={handleUserSignup}>
          <Input
            type="text"
            label="FullName"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="tel"
            label="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            placeholder="example@gmail.com"
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <MainButton type="submit">Register</MainButton>
        </MainForm>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
