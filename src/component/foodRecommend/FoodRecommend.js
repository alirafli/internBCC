import React from 'react'
import FoodList from '../foodList/FoodList'
import {Container, Title, Paragraph} from "./StyleFoodRecommend"
// import { Link } from "react-router-dom";

const FoodRecommend = () => {
  return (
    <Container>
      <Title>Bingung makan apa?</Title>
      <Paragraph>Klik aja dulu, siapa tau suka</Paragraph>
      <FoodList />
    </Container>
  )
}

export default FoodRecommend
