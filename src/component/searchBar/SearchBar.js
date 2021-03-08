import React, {useState} from "react";
import {
  Container,
  Wrapper,
  Button,
  LocateWrapper,
  SearchWrapper,
  Icon,
  Select,
  Option,
} from "./StyleSearhBar";

const SearchBar = () => {
  const [choice, setChoice] = useState("a")
  // console.log(choice)
  return (
    <Container data-aos-once="true" data-aos="fade-up">
      <Wrapper>
        <Icon gps />
        <LocateWrapper>
          <Select value={choice} onChange={(e) => {setChoice(e.target.value)}}>
            <Option value="jakarta">Jakarta</Option>
            <Option value="malang">Malang</Option>
            <Option value="bandung">Bandung</Option>
          </Select>
        </LocateWrapper>
        <Icon search />
        <SearchWrapper placeholder="Cari makanan favoritmu" />
      </Wrapper>
      <Button>Cari</Button>
    </Container>
  );
};

export default SearchBar;


