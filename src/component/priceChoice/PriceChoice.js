import React, { useState } from "react";
import RadioButton, {
  Container,
  Title,
  Wrapper,
  Icon,
} from "./StylePriceChoice";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const PriceChoice = () => {
  const [radioValue, setRadio] = useState(0);
  // console.log("Price: " + radioValue);

  const matches = useMediaQuery(
    json2mq({
      minWidth: 530,
    })
  );
  return (
    <Container>
      <Wrapper>
        <Icon />
        <Title> Harga</Title>
      </Wrapper>
      <Wrapper>
        <RadioButton
          label={matches ? "$ (< 25000 IDR)" : "$"}
          name="radio"
          value={1}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label={matches ? "$$ (25000 - 75000 IDR)" : "$ $"}
          name="radio"
          value={2}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label={matches ? "$$$ (75000 - 150000 IDR)" : "$ $ $"}
          name="radio"
          value={3}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label={matches ? "$$$$ (> 150000 IDR)" : "$ $ $ $"}
          name="radio"
          value={4}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default PriceChoice;
