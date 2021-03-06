import React from "react";
import { Container } from "./StyleCompleteResto";
import CompleteRestoCard from "../CompleteRestoCard/CompleteRestoCard"

const CompleteResto = () => {
  return (
    <Container>
      <CompleteRestoCard />
      <CompleteRestoCard />
      <CompleteRestoCard />
      <CompleteRestoCard />
    </Container>
  );
};

export default CompleteResto;
