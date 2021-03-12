import React, { useState, useEffect } from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import { Container, Title, Paragraph, Wrapper } from "./StyleAnekaKuliner";
import Restaurant from "../../api/forUserLogin";
import CompleteRestoCard from "../../component/CompleteRestoCard/CompleteRestoCard";
import PriceAndRating from "../../component/priceAndRating/PriceAndRating";
import Footer from "../../component/footer/Footer";

const AnekaKuliner = () => {
  const [resto, getResto] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchAllResto = async () => {
    setLoading(true);
    const res = await Restaurant.get("/restaurants/all");
    getResto(res.data.data);
    setLoading(false);
    // console.log(res.data.data);
  };

  useEffect(() => {
    fetchAllResto();
  }, []);
  return (
    <>
      <NavbarBackground />
      <Container data-aos-once="true" data-aos="fade-up">
        <Title>Aneka Kuliner</Title>
        <Paragraph>Pilihan kuliner terbaik dan menarik</Paragraph>
        <Wrapper>
          <PriceAndRating foodCat={true} />
          <div>
            {Loading
              ? null
              : resto.map((props) => (
                  <CompleteRestoCard
                    background={props.restoimgs[0].image}
                    name={props.name}
                    id={props.id}
                    key={props.id}
                    review={props.review}
                    image={props.restoimgs[0].image}
                    city={props.city}
                    address={props.address}
                    price={props.dollar}
                    rate={props.rate}
                  />
                ))}
          </div>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default AnekaKuliner;
