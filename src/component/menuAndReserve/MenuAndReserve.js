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
  PilihTempatWrap,
  Input,
  ButtonWrapper,
  ButtonPesan,
} from "./StyleMenuAndReserve";
import Restaurant from "../../api/forUserLogin";
import RadioButton from "../priceChoice/StylePriceChoice";
import { useAuth } from "../../config/Auth";
import swal from "sweetalert"

const MenuAndReserve = ({ seat, OurRestoId }) => {
  const [food, getFood] = useState([]);
  const [drink, getDrink] = useState([]);
  const [date, getDate] = useState("");
  const [timeReserv, getTimeReserv] = useState("");
  const [people, getPeople] = useState();
  const [comment, setComment] = useState("");
  const [inOut, setInOut] = useState("");

  const restoId = OurRestoId;
  const { authTokens } = useAuth();
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
  }, [restoId]);

  let count = 0;

  const SendReservation = () => {
    Restaurant.post(
      "/booking/create",
      {
        restaurantId: restoId,
        number_of_seat: people,
        datetime: date,
        time: timeReserv,
        place: inOut,
        content: comment,
      },
      { headers: { Authorization: `Bearer ${authTokens}` } }
    ).then((res) => {
      if (count < 0) {
        SendReservation();
        setComment("");
        console.log(res);
        count++;
        
      }
      console.log("selesai");
    }).catch(function() {
      swal("login terlebih dahulu!")
    })
  };
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

        <ParagraphOne>Tersedia {seat} kursi</ParagraphOne>
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
            <LocateWrapper>
              <Select
                onChange={(e) => {
                  getTimeReserv(e.target.value);
                }}
              >
                <Option value="08 : 00">08 : 00</Option>
                <Option value="09 : 00">09 : 00</Option>
                <Option value="10 : 00">10 : 00</Option>
                <Option value="11 : 00">11 : 00</Option>
                <Option value="12 : 00">12 : 00</Option>
              </Select>
            </LocateWrapper>
          </TitleWrapper>
          <TitleWrapper>
            <TitleOne>Jumlah Orang</TitleOne>
            <LocateWrapper>
              <Select
                onChange={(e) => {
                  getPeople(e.target.value);
                }}
              >
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </LocateWrapper>
          </TitleWrapper>
        </TimeReserWrapper>
        <TitleOne>Pilih Tempat</TitleOne>
        <PilihTempatWrap>
          <div style={{ padding: "2rem 5rem 3rem 0" }}>
            <RadioButton
              key={6}
              label={"Indoor"}
              name="radio"
              value={"indoor"}
              onChange={(e) => {
                setInOut(e.target.value);
              }}
            />
          </div>
          <div style={{ padding: "2rem 5rem 3rem 0" }}>
            <RadioButton
              key={6}
              label={"Outdoor"}
              name="radio"
              value={"outdoor"}
              onChange={(e) => {
                setInOut(e.target.value);
              }}
            />
          </div>
        </PilihTempatWrap>
        <TitleOne bottom>Catatan Tambahan</TitleOne>
        <Input
          placeholder="Tulis catatan tambahan di sini"
          type="text"
          multiline
          rows={3}
          onChange={(e) => setComment(e.target.value)}
        />
        <ButtonWrapper>
          <ButtonPesan extraa type="submit" to="#">
            Pesan menu minuman & makanan
          </ButtonPesan>
          <ButtonPesan type="submit" onClick={SendReservation} to="#">
            Reservasi tanpa pemesanan menu
          </ButtonPesan>
        </ButtonWrapper>
      </Pemesanan>
    </Container>
  );
};

export default MenuAndReserve;
