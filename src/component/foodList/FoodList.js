import React from "react";
import { Text, Container, Wrapper } from "./StyleFoodList";

const FoodList = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Nasi Padang</Text>
        <Text>Mie Ayam</Text>
        <Text>Bakso</Text>
        <Text>Fast Food</Text>
        <Text>Chineese food</Text>
        <Text>Steak</Text>
        <Text>Kebab</Text>
        <Text>Kopi</Text>
        <Text>Roti bakar</Text>
        <Text>Western food</Text>
        <Text>Indonesian food</Text>
      </Wrapper>

      <Wrapper>
        <Text>Snack</Text>
        <Text>Japanese food</Text>
        <Text>Sushi</Text>
        <Text>Ayam goreng</Text>
        <Text>Burger</Text>
        <Text>Korean food</Text>
        <Text>Nasi goreng</Text>
        <Text>Ikan Bakar</Text>
      </Wrapper>
    </Container>
  );
};

export default FoodList;
