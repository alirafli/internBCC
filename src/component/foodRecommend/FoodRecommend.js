import React from 'react'
import FoodList from '../foodList/FoodList'
import {Container, Title, Paragraph} from "./StyleFoodRecommend"

const FoodRecommend = () => {
  return (
    <Container data-aos-once="true" data-aos="fade-up">
      <Title>Bingung makan apa?</Title>
      <Paragraph>Klik aja dulu, siapa tau suka</Paragraph>
      <FoodList />
    </Container>
  )
}

export default FoodRecommend
