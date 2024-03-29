import React, { useState, useEffect } from "react";
import { Container } from "./StyleCompleteResto";
import CompleteRestoCard from "../CompleteRestoCard/CompleteRestoCard";
import Restaurant from "../../api/forUserLogin";
import { withRouter } from "react-router-dom";

const CompleteResto = (props) => {
  const [restoAll, getRestoAll] = useState([]);
  const [Loading, setLoading] = useState(false);
  const restoId = props.match.params.id;

  useEffect(() => {
    const fetchRestoAll = async () => {
      setLoading(true);
      const res = await Restaurant.get("/restocat/" + restoId);
      getRestoAll(res.data.data.restaurants);
      setLoading(false);
      // console.log(res.data.data.restaurants);
    };
    fetchRestoAll();
  }, [restoId]);
  
  return (
    <Container>
      {Loading
        ? restoAll.map((resto) => <CompleteRestoCard key={resto.id} />)
        : restoAll.map((resto) => (
            <CompleteRestoCard
              background={resto.restoimgs[0].image}
              id={resto.id}
              key={resto.id}
              RestoId={resto.CatRestocat.restaurantId}
              name={resto.name}
              address={resto.address}
              rate={resto.rate}
              city={resto.city}
              dollar={resto.dollar}
              review={resto.review}
            />
          ))}
    </Container>
  );
};

export default withRouter(CompleteResto);
