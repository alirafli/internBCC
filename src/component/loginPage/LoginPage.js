import React, { useState } from "react";
import {
  Background,
  Container,
  Wrapper,
  MainForm,
  Title,
  Input,
  MainButton,
  Paragraph,
  Linked,
  ContentWrapper,
  ExitWrapper,
} from "./StyleAccountForm";
import forUserLogin from "../../api/forUserLogin";
import { useAuth } from "../../config/Auth";
import swal from "sweetalert";

const LoginPage = ({ showModal, setShowModal, setShowModalReg }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const res = await forUserLogin.post("user/login", {
      email: Email,
      password: Password,
    });
    if (res.status === 200) {
      setAuthTokens(res.data.data.token);
      swal("Berhasil Login!")
    }
  };

  return (
    <>
      {showModal ? (
        <Background data-aos-once="true" data-aos="fade">
          <Container data-aos-once="true" data-aos="fade-up">
            <Wrapper>
              <ContentWrapper header>
                <Title>Sign in</Title>
                <ExitWrapper
                  onClick={() => setShowModal((prev) => !prev)}
                  aria-label="close modal"
                />
              </ContentWrapper>
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
                <MainButton type="submit">Login</MainButton>
                <Paragraph style={{ margin: "2rem 0 0 0" }}>
                  Belum memiliki akun?{" "}
                  <Linked
                    onClick={() => {
                      setShowModal((prev) => !prev);
                      setShowModalReg((prev) => !prev);
                    }}
                  >
                    Sign Up
                  </Linked>
                </Paragraph>
              </MainForm>
            </Wrapper>
          </Container>
        </Background>
      ) : null}
    </>
  );
};

export default LoginPage;
