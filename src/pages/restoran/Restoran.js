import React, { useState, useEffect } from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import {
  Container,
  Title,
  Gallery,
  Ulasan,
  Banner,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
} from "./StyleRestoran";
import Restaurant from "../../api/forUserLogin";
import Footer from "../../component/footer/Footer";
import RestoDetailCom from "../../component/restoDetailCom/RestoDetailCom";
import MenuAndReserve from "../../component/menuAndReserve/MenuAndReserve";

const Restoran = () => {
  const [restoDetail, getRestoDetail] = useState([]);
  const [image, setImage] = useState(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRestoDetail = async () => {
      setLoading(true);
      const res = await Restaurant.get("/restaurants/2");
      getRestoDetail(res.data.data);
      setImage(res.data.data.restoimgs);
      setLoading(false);
      // console.log(res.data.data.restoimgs[0]);
    };
    fetchRestoDetail();
  }, []);
  return (
    <>
      <NavbarBackground />
      {loading ? null : (
        <>
          <Container>
            <Title>{restoDetail.name}</Title>
            <Gallery>
              <Banner background={image[0].image} />
              <Photo1 background={image[1].image} />
              <Photo2 background={image[2].image} />
              <Photo3 background={image[3].image} />
              <Photo4 background={image[0].image} />
            </Gallery>
            <RestoDetailCom />
            <MenuAndReserve />
            <Ulasan></Ulasan>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Restoran;
