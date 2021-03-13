import React, { useState, useEffect } from "react";
import VariousCulinary from "../../component/variousCulinary/VariousCulinary";
import PlaceCategory from "../../component/placeCategory/PlaceCategory";
import { Container, Paragraph, Title } from "./HomeStyle";
import RestoRegistration from "../../component/restoRegistration/RestoRegistration";
import FoodRecommend from "../../component/foodRecommend/FoodRecommend";
import Footer from "../../component/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import SearchBar from "../../component/searchBar/SearchBar";
import ComingSoon from "../../component/comingSoon/ComingSoon"

const Home = () => {
  const [control, setControl] = useState(false);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal((prev) => !prev);
  };
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
        <SearchBar />
      </Container>
      <PlaceCategory place="Jakarta" />
      <VariousCulinary />
      <RestoRegistration setControl={setControl} openModal={openModal} />
      <ComingSoon modal={modal} setModal={setModal} />
      <FoodRecommend />
      <Footer />
    </div>
  );
};

export default Home;
