import React from "react";
import { LinkWrapper, Content, Title, Paragraph } from "./StyleCategoryCard";

const CategoryCard = ({ image, resto, count, banner }) => {
  return (
    <LinkWrapper to="/VariousCulinary">
      <Content image={image}>
        <Title>{resto}</Title>
        <Paragraph>{count} Restoran</Paragraph>
      </Content>
    </LinkWrapper>
  );
};

export default CategoryCard;


