import React from "react";
import {
  Container,
  Title,
  Comment,
  UserName,
  Content,
  Profile,
  CommentWrapper,
  ProfileWrapper,
  NameDateWrapper,
  Input,
  SubmitButton,
} from "./StyleUlasan";

const Ulasan = () => {
  return (
    <Container>
      <Title>ini ulasan</Title>
      <Content>
        <ProfileWrapper>
          <Profile />
          <NameDateWrapper>
            <UserName>ali rafli</UserName>
            <UserName date>03 feb 2021</UserName>
          </NameDateWrapper>
        </ProfileWrapper>
        <Comment>LALALALALA</Comment>
      </Content>
      <Content>
        <ProfileWrapper>
          <Profile />
          <NameDateWrapper>
            <UserName>dragon balls</UserName>
            <UserName date>04 mar 2021</UserName>
          </NameDateWrapper>
        </ProfileWrapper>
        <Comment>KERENNN</Comment>
      </Content>

      <CommentWrapper>
        <Input
          placeholder="Ketik ulasanmu tentang restoran disini"
          type="text"
          multiline
          rows={2}
        />
        <SubmitButton>Kirim</SubmitButton>
      </CommentWrapper>
    </Container>
  );
};

export default Ulasan;
