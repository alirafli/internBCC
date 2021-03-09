import React, { useState, useEffect } from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import {
  Container,
  JumboTron,
  Title,
  Paragraph,
  Wrapper,
} from "./StyleFullVariousCulinary";
import PriceAndRating from "../../component/priceAndRating/PriceAndRating";
import CompleteResto from "../../component/completeResto/CompleteResto";
import Restaurant from "../../api/forUserLogin";
import { withRouter } from "react-router-dom";
import DefaultBanner from "../../media/img/defaultBanner.png";

const FullVariousCulinary = (props) => {
  const [restoByCat, getRestoByCat] = useState([]);
  const [Loading, setLoading] = useState(true);

  const restoId = props.match.params.id;

  useEffect(() => {
    const fetchRestoByCat = async () => {
      setLoading(true);
      const res = await Restaurant.get(`/restocat/${restoId}`);
      getRestoByCat(res.data.data);
      setLoading(false);
      // console.log(res.data.data);
    };
    fetchRestoByCat();
  }, [restoId]);

  const restaurant = restoByCat;
  // console.log(restaurant);

  return (
    <>
      <NavbarBackground />
      <Container>
        {Loading ? (
          <JumboTron background={DefaultBanner}>
            <Title>Kopi</Title>
            <Paragraph>Tersedia 2 restoran</Paragraph>
          </JumboTron>
        ) : (
          <JumboTron background={restaurant.bannerimage}>
            <Title>{restaurant.name}</Title>
            <Paragraph>
              Tersedia {restaurant.restaurants.length} restoran
            </Paragraph>
          </JumboTron>
        )}
        <Wrapper>
          <PriceAndRating />
          <CompleteResto />
        </Wrapper>
      </Container>
    </>
  );
};

export default withRouter(FullVariousCulinary);
