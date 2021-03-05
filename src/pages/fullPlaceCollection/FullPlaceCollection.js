import React from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import { Container } from "./StyleFullPlaceCollection";
import {
  Title,
  Paragraph,
  Bold,
} from "../../component/placeCategory/StylePlaceCategory";
import Footer from "../../component/footer/Footer";
import GridPlaceCollection from "../../component/GridPlaceCollection/GridPlaceCollection"

const FullPlaceCollection = () => {
  return (
    <>
      <NavbarBackground />
      <Container>
        <Title>
          Koleksi di <Bold>Jakarta</Bold>
        </Title>
        <Paragraph>Temukan restoran, bar, cafe terbaik di lokasimu </Paragraph>
        <GridPlaceCollection page="all"/>
      </Container>
      <Footer />
    </>
  );
};

export default FullPlaceCollection;
