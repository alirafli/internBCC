import React from "react";
import PriceChoice from "../priceChoice/PriceChoice";
import RatingChoice from "../ratingChoice/RatingChoice";
import { Container, Wrapper } from "./StylePriceAndRating";
import FoodCategoryChoice from "../foodCategoryChoice/FoodCategoryChoice";

const PriceAndRating = ({ foodCat }) => {
  return (
    <Container>
      <Wrapper>
        <PriceChoice />
      </Wrapper>
      <Wrapper>
        <RatingChoice />
      </Wrapper>
      {foodCat ? <FoodCategoryChoice /> : null}
    </Container>
  );
};

export default PriceAndRating;
