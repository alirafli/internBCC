import React from "react";
import { Container } from "./StyleGridPlaceCollection";
import Grid from "@material-ui/core/Grid";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Background1 from "../../media/img/cepatSaji.jpg";
import Background2 from "../../media/img/khasJepang.jpg";
import Background3 from "../../media/img/kopi.jpg";
import Background4 from "../../media/img/asliIndonesia.jpg";
import CategoryCard from "../categoryCard/CategoryCard";

const StyleGridPlaceCollection = () => {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 481,
    })
  );

  return (
    <Container>
      <Grid container justify="space-between">
        <Grid item xs={matches ? 3 : 6}>
          <CategoryCard
            image={Background1}
            resto="Cepat Saji"
            count={8}
          ></CategoryCard>
        </Grid>
        <Grid item xs={matches ? 3 : 6}>
          <CategoryCard
            image={Background2}
            resto="Khas Jepang"
            count={5}
          ></CategoryCard>
        </Grid>
        <Grid item xs={matches ? 3 : 6}>
          <CategoryCard
            image={Background3}
            resto="Kopi"
            count={3}
          ></CategoryCard>
        </Grid>
        <Grid item xs={matches ? 3 : 6}>
          <CategoryCard
            image={Background4}
            resto="Asli Indonesia"
            count={4}
          ></CategoryCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StyleGridPlaceCollection;
