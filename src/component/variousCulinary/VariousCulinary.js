import React from "react";
import {
  Container,
  Title,
  Paragraph,
  FoodWrapper,
  LinkTo,
} from "./StyleVariousCulinary";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CulinaryCard from "../culinaryCard/CulinaryCard";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { IoIosArrowForward } from "react-icons/io";

const VariousCulinary = () => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 481,
    })
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: matches ? 4 : 2,
    slidesToScroll: matches ? 4 : 2,
  };

  return (
    <Container>
      <Title>Aneka kuliner</Title>
      <Paragraph>
        Pilihan kuliner terbaik dan menarik{" "}
        <LinkTo to="/VariousCulinary">
          Lihat Semua
          <IoIosArrowForward />
        </LinkTo>
      </Paragraph>
      <FoodWrapper>
        <Slider {...settings}>
          <CulinaryCard name="1" />
          <CulinaryCard name="2" />
          <CulinaryCard name="3" />
          <CulinaryCard name="4" />
          <CulinaryCard name="5" />
          <CulinaryCard name="6" />
          <CulinaryCard name="7" />
          <CulinaryCard name="8" />
        </Slider>
      </FoodWrapper>
    </Container>
  );
};

export default VariousCulinary;
