import React, { useState, useEffect } from "react";
import { Container } from "./StyleGridPlaceCollection";
import Grid from "@material-ui/core/Grid";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CategoryCard from "../categoryCard/CategoryCard";
import Restaurant from "../../api/forUserLogin";

const StyleGridPlaceCollection = ({ page }) => {
  const [restoCat, getRestoCat] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await Restaurant.get(
        `/restocat/all${page === `home` ? `?limit=4` : `/`}`
      );
      getRestoCat(res.data.data);
      // console.log(res.data.data);
    };
    fetchCategory();
  }, [page]);

  const matches = useMediaQuery(
    json2mq({
      minWidth: 481,
    })
  );
  return (
    <>
      {page === "home" ? (
        <Container>
          <Grid container justify="space-between">
            {restoCat.map((resto) => (
              <Grid item xs={matches ? 3 : 6} key={resto.id}>
                <CategoryCard
                  id={resto.id}
                  image={resto.cardimage}
                  resto={resto.name}
                  count={resto.restaurants.length}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Container>
          <Grid container justify="space-between">
            {restoCat.map((resto) => (
              <Grid item xs={matches ? 3 : 6} key={resto.id}>
                <CategoryCard
                  id={resto.id}
                  image={resto.cardimage}
                  resto={resto.name}
                  count={resto.restaurants.length}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default StyleGridPlaceCollection;
