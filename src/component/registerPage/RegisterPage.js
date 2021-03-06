import React, { useState } from "react";
import {
  Background,
  Container,
  Wrapper,
  MainForm,
  Title,
  Input,
  MainButton,
  Checkbox,
  ContentWrapper,
  Paragraph,
  Linked,
  ExitWrapper,
} from "../loginPage/StyleAccountForm.js";
import forUserLogin from "../../api/forUserLogin";
import { useAuth } from "../../config/Auth";
import { Redirect } from "react-router-dom";

const RegisterPage = ({ showModalReg, setShowModalReg, setShowModal }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [check, setCheck] = useState(false);

  const toggleChecked = () => setCheck(value => !value);

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
    <>
      {showModalReg ? (
        <Background data-aos-once="true" data-aos="fade">
          <Container data-aos-once="true" data-aos="fade-up">
            <Wrapper>
              <ContentWrapper header>
                <Title>Sign Up</Title>
                <ExitWrapper onClick={() => setShowModalReg((prev) => !prev)} />
              </ContentWrapper>
              <MainForm onSubmit={handleUserSignup}>
                <Input
                  type="text"
                  label="Nama Lengkap"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="tel"
                  label="Nomor Telepon"
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
                  label="Kata Sandi"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ContentWrapper check>
                  <Checkbox
                    type="checkbox"
                    checked={check}
                    onChange={toggleChecked}
                  />
                  <Paragraph>
                    Saya setuju dengan kebijakan privasi ...
                  </Paragraph>
                </ContentWrapper>
                <MainButton type="submit" disabled={!check}>
                  Buat Akun
                </MainButton>
                <Paragraph style={{ margin: "2rem 0 0 0" }}>
                  Sudah memiliki akun?{" "}
                  <Linked
                    onClick={() => {
                      setShowModalReg((prev) => !prev);
                      setShowModal((prev) => !prev);
                    }}
                  >
                    Sign In
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

export default RegisterPage;
