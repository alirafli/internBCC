import React, { useState, useEffect } from "react";
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
import Restaurant from "../../api/forUserLogin";

const VariousCulinary = () => {
  const [resto, getResto] = useState([]);

  const fetchResto = async () => {
    const res = await Restaurant.get("/restaurants/all");
    getResto(res.data.data);
    // console.log(res.data.data);
  };

  useEffect(() => {
    fetchResto();
  }, []);

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
    <Container data-aos-once="true" data-aos="fade-up">
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
          {resto.map((props) => (
            <CulinaryCard name = {props.name}/>
          ))}

          {/* <CulinaryCard name="resto 1" content={"kopi, cepat saji $$$"} />
          <CulinaryCard name="resto 2" content={"kopi, cepat saji $$$"} />
          <CulinaryCard name="resto 3" content={"kopi, cepat saji $$$"} />
          <CulinaryCard name="resto 4" content={"kopi, cepat saji $$$"} />
          <CulinaryCard name="resto 5" content={"kopi, cepat saji $$$"} />
          <CulinaryCard name="resto 6" content={"kopi, cepat saji $$$"} />
          <CulinaryCard name="resto 7" content={"kopi, cepat saji $$$"} />
          <CulinaryCard name="resto 8" content={"kopi, cepat saji $$$"} /> */}
        </Slider>
      </FoodWrapper>
    </Container>
  );
};

export default VariousCulinary;
