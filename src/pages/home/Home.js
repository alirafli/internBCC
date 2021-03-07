import React, { useEffect } from "react";
import VariousCulinary from "../../component/variousCulinary/VariousCulinary";
import PlaceCategory from "../../component/placeCategory/PlaceCategory";
import { Container, Paragraph, Title } from "./HomeStyle";
import RestoRegistration from "../../component/restoRegistration/RestoRegistration";
import FoodRecommend from "../../component/foodRecommend/FoodRecommend";
import Footer from "../../component/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <div>
      <Container>
        <Title data-aos-once="true" data-aos="fade-up">
          Kelamaan Nunggu?
        </Title>
        <Paragraph data-aos-once="true" data-aos="fade-up">
          Pesan meja dan makanan lebih cepat dan praktis
        </Paragraph>
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
