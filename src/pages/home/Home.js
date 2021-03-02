import React from "react";
import VariousCulinary from "../../component/variousCulinary/VariousCulinary";
import PlaceCategory from "../../component/placeCategory/PlaceCategory";
import { Container, Title } from "./HomeStyle";
import RestoRegistration from "../../component/restoRegistration/RestoRegistration";
import FoodRecommend from "../../component/foodRecommend/FoodRecommend";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div>
      <Container>
        <Title>Kelamaan Nunggu?</Title>
        <p style={{ fontSize: "3.6rem" }}>
          Pesan meja dan makanan lebih cepat dan praktis
        </p>
      </Container>
      <PlaceCategory />
      <VariousCulinary />
      <RestoRegistration />
      <FoodRecommend />
      <Footer />
    </div>
  );
};

export default Home;
