import React from "react";
import {
  Container,
  Bold,
  Title,
  Paragraph,
  LinkTo,
} from "./StylePlaceCategory";
import { IoIosArrowForward } from "react-icons/io";
import GridPlaceCollection from "../GridPlaceCollection/GridPlaceCollection";

const PlaceCollection = () => {
  return (
    <div>
      <Container>
        <Title>
          Koleksi di <Bold>Jakarta</Bold>
        </Title>
        <Paragraph>
          Temukan restoran, bar, cafe terbaik di lokasimu{" "}
          <LinkTo to="/PlaceCategory">
            Lihat Semua
            <IoIosArrowForward />
          </LinkTo>
        </Paragraph>
        <GridPlaceCollection />
      </Container>
    </div>
  );
};

export default PlaceCollection;