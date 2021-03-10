import React, { useState, useEffect } from "react";
import {
  Container,
  MenuResto,
  TitleOne,
  ParagraphOne,
  Pemesanan,
  DatePick,
  MenuContainer,
  TimeReserWrapper,
  TitleWrapper,
  LocateWrapper,
  Option,
  Select,
} from "./StyleMenuAndReserve";
import Restaurant from "../../api/forUserLogin";

const MenuAndReserve = () => {
  const [food, getFood] = useState([]);
  const [drink, getDrink] = useState([]);
  const [date, getDate] = useState("");

  const restoId = 2;

  useEffect(() => {
    const fetchFood = async () => {
      const res = await Restaurant.get(`/food/foods/${restoId}`);
      getFood(res.data.data);
      // console.log(res.data.data);
    };
    const fetchDrink = async () => {
      const res = await Restaurant.get(`/food/drink/${restoId}`);
      getDrink(res.data.data);
      // console.log(res.data.data);
    };
    fetchFood();
    fetchDrink();
  }, []);

  return (
    <Container>
      <MenuResto>
        <TitleOne>Menu</TitleOne>
        <TitleOne>Makanan</TitleOne>
        {food.map((props) => (
          <MenuContainer key={props.id}>
            <ParagraphOne>{props.name}</ParagraphOne>
            <ParagraphOne>Rp. {props.price}</ParagraphOne>
          </MenuContainer>
        ))}
        <TitleOne>Minuman</TitleOne>
        {drink.map((props) => (
          <MenuContainer key={props.id}>
            <ParagraphOne>{props.name}</ParagraphOne>
            <ParagraphOne>Rp. {props.price}</ParagraphOne>
          </MenuContainer>
        ))}
      </MenuResto>
      <Pemesanan>
        <TitleOne>Reservasi Meja</TitleOne>
        <LocateWrapper>
          <div>
            <Select>
              <Option value="aaa"></Option>
              <Option value="bbb"></Option>
              <Option value="ccc"></Option>
            </Select>
          </div>
        </LocateWrapper>
        <ParagraphOne>Tersedia 20 kursi</ParagraphOne>
        <DatePick
          type="date"
          name="dateofbirth"
          id="dateofbirth"
          onChange={(e) => {
            getDate(e.target.value);
          }}
        />
        <TimeReserWrapper>
          <TitleWrapper>
            <TitleOne>Waktu Reservasi</TitleOne>
          </TitleWrapper>
          <TitleWrapper>
            <TitleOne>Jumlah Orang</TitleOne>
          </TitleWrapper>
        </TimeReserWrapper>
      </Pemesanan>
    </Container>
  );
};

export default MenuAndReserve;
