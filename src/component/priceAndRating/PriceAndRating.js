import React from "react";
import PriceChoice from "../priceChoice/PriceChoice";
import RatingChoice from "../ratingChoice/RatingChoice";
import { Container } from "./StylePriceAndRating";

const PriceAndRating = () => {
  return (
    <Container>
      <PriceChoice />
      <RatingChoice />
      
    </Container>
  );
};

export default PriceAndRating;
