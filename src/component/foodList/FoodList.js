import React, { useState, useEffect } from "react";
import { Text, Container, Wrapper } from "./StyleFoodList";
import Restaurant from "../../api/forUserLogin";

const FoodList = () => {
  const [foodCat, setFoodCat] = useState([]);

  useEffect(() => {
    const fetchFoodCat = async () => {
      const res = await Restaurant.get("/restaurants/all/cat");
      setFoodCat(res.data.data);
      // console.log(res.data.data);
    };
    fetchFoodCat();
  }, []);

  return (
    <Container>
      <Wrapper>
        {foodCat.map((props) => (
          <Text key={props.id}>{props.name}</Text>
        ))}
        <Text>Roti bakar</Text>
        <Text>Western food</Text>
        <Text>Indonesian food</Text>
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
