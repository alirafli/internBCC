import React, { useEffect, useRef } from "react";
import VariousCulinary from "../../component/variousCulinary/VariousCulinary";
import PlaceCategory from "../../component/placeCategory/PlaceCategory";
import { Container, Animation, Paragraph, Title } from "./HomeStyle";
import RestoRegistration from "../../component/restoRegistration/RestoRegistration";
import FoodRecommend from "../../component/foodRecommend/FoodRecommend";
import Footer from "../../component/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  // const container = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("../../media/video/headerFull.json"),
  //   });
  // });

  return (
    <div>
      <Container>
        {/* <Animation ref={container} /> */}
        <Title>Kelamaan Nunggu?</Title>
        <Paragraph>Pesan meja dan makanan lebih cepat dan praktis</Paragraph>
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
