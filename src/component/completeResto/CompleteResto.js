import React, { useState, useEffect } from "react";
import { Container } from "./StyleCompleteResto";
import CompleteRestoCard from "../CompleteRestoCard/CompleteRestoCard";
import Restaurant from "../../api/forUserLogin";
import { withRouter } from "react-router-dom";

const CompleteResto = (props) => {
  const [restoAll, getRestoAll] = useState([]);
  const [Loading, setLoading] = useState(false);
  const restoId = props.match.params.id;

  const fetchRestoAll = async () => {
    setLoading(true);
    const res = await Restaurant.get("/restocat/" + restoId);
    getRestoAll(res.data.data.restaurants);
    setLoading(false);
    console.log(res.data.data.restaurants);
  };

  useEffect(() => {
    fetchRestoAll();
  }, []);

  // console.log(restoId)
  return (
    <Container>
      {Loading
        ? restoAll.map((resto) => <CompleteRestoCard/>)
        : restoAll.map((resto) => (
            <CompleteRestoCard
              background="a"
              key={resto.id}
              RestoId={resto.CatRestocat.restaurantId}
              name={resto.name}
              address={resto.address}
              rate={resto.rate}
              dollar={resto.dollar}
              review={resto.review}
            />
          ))}
    </Container>
  );
};

export default withRouter(CompleteResto);
