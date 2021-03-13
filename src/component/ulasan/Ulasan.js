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
            <UserName>Ali Rafli</UserName>
            <UserName date>03 feb 2021</UserName>
          </NameDateWrapper>
        </ProfileWrapper>
        <Comment>makanannya Enak Banget!</Comment>
      </Content>
      <Content>
        <ProfileWrapper>
          <Profile />
          <NameDateWrapper>
            <UserName>Dany Rheza</UserName>
            <UserName date>12 feb 2021</UserName>
          </NameDateWrapper>
        </ProfileWrapper>
        <Comment>ganyesel makan disini!</Comment>
      </Content>

      <CommentWrapper>
        <Input
          placeholder="Ketik ulasanmu tentang restoran di sini"
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
