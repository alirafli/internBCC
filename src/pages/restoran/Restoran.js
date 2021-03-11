import React, { useState, useEffect } from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import {
  Container,
  Title,
  Gallery,
  Banner,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  MenuNext,
} from "./StyleRestoran";
import Restaurant from "../../api/forUserLogin";
import Footer from "../../component/footer/Footer";
import RestoDetailCom from "../../component/restoDetailCom/RestoDetailCom";
import MenuAndReserve from "../../component/menuAndReserve/MenuAndReserve";
import UlasanAll from "../../component/ulasan/Ulasan";
import { withRouter } from "react-router-dom";

const Restoran = (props) => {
  const [restoDetail, getRestoDetail] = useState([]);
  const [image, setImage] = useState([
    { image: "a" },
    { image: "a" },
    { image: "a" },
    { image: "a" },
    { image: "" },
  ]);
  const [loading, setLoading] = useState(false);

  const restoId = props.match.params.id;

  useEffect(() => {
    const fetchRestoDetail = async () => {
      setLoading(true);
      const res = await Restaurant.get(`/restaurants/${restoId}`);
      getRestoDetail(res.data.data);
      if (res.data.data.restoimgs.length == 0) {
      } else {
        setImage(res.data.data.restoimgs);
      }
      setLoading(false);
      // console.log(res.data.data);
    };
    fetchRestoDetail();
  }, []);
  return (
    <>
      <NavbarBackground />
      {loading ? null : (
        <>
          <Container data-aos-once="true" data-aos="fade-up">
            <Title>{restoDetail.name}</Title>
            <Gallery>
              <Banner background={image[4].image} />
              <Photo1 background={image[1].image} />
              <Photo2 background={image[2].image} />
              <Photo3 background={image[3].image} />
              <Photo4 background={image[0].image} />
            </Gallery>
            <RestoDetailCom
              alamat={restoDetail.address}
              rate={restoDetail.rate}
              ulasan={restoDetail.review}
            />
            <MenuAndReserve
              seat={restoDetail.number_of_seat}
              OurRestoId={restoId}
            />
            <UlasanAll />
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default withRouter(Restoran);
