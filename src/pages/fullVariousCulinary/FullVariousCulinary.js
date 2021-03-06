import React, { useState, useEffect } from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import {
  Container,
  JumboTron,
  Title,
  Paragraph,
  Wrapper,
} from "./StyleFullVariousCulinary";
import Kopi from "../../media/img/jumboKopi.png";
import PriceAndRating from "../../component/priceAndRating/PriceAndRating";
import CompleteResto from "../../component/completeResto/CompleteResto";
import Restaurant from "../../api/forUserLogin";

const FullVariousCulinary = () => {
  const [restoByCat, getRestoByCat] = useState([]);

  const fetchRestoByCat = async () => {
    const res = await Restaurant.get("/restaurants/all/");
    getRestoByCat(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    fetchRestoByCat();
  }, []);

  return (
    <>
      <NavbarBackground />
      <Container>
        <JumboTron background={Kopi}>
          <Title>Kopi</Title>
          <Paragraph>Tersedia 2 restoran</Paragraph>
        </JumboTron>
        <Wrapper>
          <PriceAndRating />
          <CompleteResto />
        </Wrapper>
      </Container>
    </>
  );
};

export default FullVariousCulinary;
