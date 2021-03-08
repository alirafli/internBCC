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
import CompleteRestoCard from "../../component/CompleteRestoCard/CompleteRestoCard";

const FullVariousCulinary = (props) => {
  const [restoByCat, getRestoByCat] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [allResto, getAllResto] = useState([]);

  const restoId = props.match.params.id;
  const restoUrl = props.match.url;
  // console.log(props.match);

  const fetchRestoByCat = async () => {
    setLoading(true);
    const res = await Restaurant.get("/restocat/all/");
    getRestoByCat(res.data.data);
    setLoading(false);
    // console.log(res.data.data);
  };

  useEffect(() => {
    fetchRestoByCat();
  }, []);

  const fetchAllResto = async () => {
    setLoading(true);
    const res = await Restaurant.get("/restaurants/all");
    getAllResto(res.data.data);
    // console.log(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllResto();
  }, []);

  const restaurant = restoByCat.filter((id) => id.id == restoId);
  // console.log(restaurant);

  return (
    <>
      <NavbarBackground />
      <Container>
        {restoUrl == "/VariousCulinary/all" ? (
          <>
            {Loading ? null : (
              <>
                <Wrapper>
                  <PriceAndRating />
                  <div>
                    {allResto.map((resto) => (
                      <CompleteRestoCard
                        background={resto.restoimgs[0].image}
                        key={resto.id}
                        name={resto.name}
                        address={resto.address}
                        rate={resto.rate}
                        dollar={resto.dollar}
                        review={resto.review}
                      />
                    ))}
                  </div>
                </Wrapper>
              </>
            )}
          </>
        ) : (
          <>
            {Loading ? (
              <JumboTron background={DefaultBanner}>
                <Title>Kopi</Title>
                <Paragraph>Tersedia 2 restoran</Paragraph>
              </JumboTron>
            ) : (
              <JumboTron background={restaurant[0].bannerimage}>
                <Title>{restaurant[0].name}</Title>
                <Paragraph>
                  Tersedia {restaurant[0].restaurants.length} restoran
                </Paragraph>
              </JumboTron>
            )}

            <Wrapper>
              <PriceAndRating />
              <CompleteResto />
            </Wrapper>
          </>
        )}
      </Container>
    </>
  );
};

export default withRouter(FullVariousCulinary);
