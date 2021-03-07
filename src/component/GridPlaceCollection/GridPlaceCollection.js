import React, { useState, useEffect } from "react";
import { Container } from "./StyleGridPlaceCollection";
import Grid from "@material-ui/core/Grid";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Background1 from "../../media/img/cepatSaji.jpg";
// import Background2 from "../../media/img/khasJepang.jpg";
// import Background3 from "../../media/img/kopi.jpg";
// import Background4 from "../../media/img/asliIndonesia.jpg";
import CategoryCard from "../categoryCard/CategoryCard";
import Restaurant from "../../api/forUserLogin";

const StyleGridPlaceCollection = ({ page }) => {
  const [restoCat, getRestoCat] = useState([]);

  const fetchCategory = async () => {
    const res = await Restaurant.get(
      `/restocat/all${page == `home` ? `?limit=4` : `/`}`
    );
    getRestoCat(res.data.data);
    // console.log(res.data.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const matches = useMediaQuery(
    json2mq({
      minWidth: 481,
    })
  );
  return (
    <>
      {page == "home" ? (
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
        // <Container>
        //   <Grid container justify="space-between">
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background1}
        //         resto="Cepat Saji"
        //         count={8}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background2}
        //         resto="Khas Jepang"
        //         count={5}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background3}
        //         resto="Kopi"
        //         count={3}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background4}
        //         resto="Asli Indonesia"
        //         count={4}
        //       ></CategoryCard>
        //     </Grid>
        //   </Grid>
        // </Container>
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
        // <Container>
        //   <Grid container justify="space-between">
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background1}
        //         resto="Cepat Saji"
        //         count={8}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background2}
        //         resto="Khas Jepang"
        //         count={5}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background3}
        //         resto="Kopi"
        //         count={3}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background4}
        //         resto="Asli Indonesia"
        //         count={4}
        //       ></CategoryCard>
        //     </Grid>
        //   </Grid>
        //   <Grid container justify="space-between">
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background5}
        //         resto="Cepat Saji"
        //         count={8}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background6}
        //         resto="Khas Jepang"
        //         count={5}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background7}
        //         resto="Kopi"
        //         count={3}
        //       ></CategoryCard>
        //     </Grid>
        //     <Grid item xs={matches ? 3 : 6}>
        //       <CategoryCard
        //         image={Background8}
        //         resto="Asli Indonesia"
        //         count={4}
        //       ></CategoryCard>
        //     </Grid>
        //   </Grid>
        // </Container>
      )}
    </>
  );
};

export default StyleGridPlaceCollection;
