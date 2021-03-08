import React, { useState } from "react";
import RadioButton, {
  Container,
  Title,
  Wrapper,
  Icon,
} from "../priceChoice/StylePriceChoice";

const FoodCategoryChoice = () => {
  const [radioValue, setRadio] = useState("");
  // console.log("Food Category: " + radioValue);
  return (
    <Container>
      <Wrapper>
        <Icon food />
        <Title> Kategori</Title>
      </Wrapper>
      <Wrapper>
        <RadioButton
          label="Nasi"
          name="radio"
          value="nasi"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label="Pizza"
          name="radio"
          value="pizza"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label="Kopi"
          name="radio"
          value="kopi"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label="Cepat Saji"
          name="radio"
          value="cepat saji"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label="Indonesia"
          name="radio"
          value="indonesia"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label="Roti Bakar"
          name="radio"
          value="roti bakar"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label="Japanese Food"
          name="radio"
          value="japanese food"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label="Sushi"
          name="radio"
          value="sushi"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default FoodCategoryChoice;
