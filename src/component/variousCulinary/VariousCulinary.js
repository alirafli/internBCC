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
  const [Loading, setLoading] = useState(false);

  const fetchResto = async () => {
    setLoading(true);
    const res = await Restaurant.get("/restaurants/all");
    getResto(res.data.data);
    setLoading(false);
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
      {Loading ? null : (
        <>
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
                <CulinaryCard name={props.name} key={props.id} />
              ))}
            </Slider>
          </FoodWrapper>{" "}
        </>
      )}
    </Container>
  );
};

export default VariousCulinary;
