import React, { useState } from "react";
import {
  Container,
  Wrapper,
  MainForm,
  Title,
  Input,
  Label,
  MainButton,
  ForgotPassword,
} from "./StyleAccountForm";
import forUserLogin from "../../api/forUserLogin";
import { useAuth } from "../../config/Auth";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();
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
        <Title>LOGIN</Title>
        <MainForm onSubmit={handleUserLogin}>
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
          <ForgotPassword to="/">Forgot your password?</ForgotPassword>
          <MainButton type="submit">Login</MainButton>
        </MainForm>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
