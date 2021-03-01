import React from "react";
import { Content, Title, Paragraph } from "./StyleCategoryCard";

const CategoryCard = ({ image, resto, count }) => {
  return (
    <Content image={image}>
      <Title>{resto}</Title>
      <Paragraph>{count} Restoran</Paragraph>
    </Content>
  );
};

export default CategoryCard;
