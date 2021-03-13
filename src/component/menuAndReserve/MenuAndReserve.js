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
  Button2,
} from "./StyleMenuAndReserve";
import Restaurant from "../../api/forUserLogin";
import RadioButton from "../priceChoice/StylePriceChoice";
import { useAuth } from "../../config/Auth";
import swal from "sweetalert";
import ChoosePayment from "../paymentPopup/ChoosePayment";
import PaymentConfirm from "../paymentPopup/PaymentConfirm";
import SuccessPayment from "../paymentPopup/SuccessPayment";

const MenuAndReserve = ({ seat, OurRestoId }) => {
  const [food, getFood] = useState([]);
  const [drink, getDrink] = useState([]);
  const [date, getDate] = useState("");
  const [timeReserv, getTimeReserv] = useState("");
  const [people, getPeople] = useState();
  const [comment, setComment] = useState("");
  const [inOut, setInOut] = useState("");

  const [payChoose, setPayChoose] = useState(false);
  const [payConfirm, setPayConfirm] = useState(false);
  const [payResult, setPayResult] = useState(false);

  const openPayChoose = () => {
    setPayChoose((prev) => !prev);
  };

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

  const LoginFirst = () => {
    swal("login terlebih dahulu!");
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
                <Option value="13 : 00">13 : 00</Option>
                <Option value="14 : 00">14 : 00</Option>
                <Option value="15 : 00">15 : 00</Option>
                <Option value="16 : 00">16 : 00</Option>
                <Option value="17 : 00">17 : 00</Option>
                <Option value="18 : 00">18 : 00</Option>
                <Option value="19 : 00">19 : 00</Option>
                <Option value="20 : 00">20 : 00</Option>
                <Option value="21 : 00">21 : 00</Option>
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
                <Option value="6">6</Option>
                <Option value="7">7</Option>
                <Option value="8">8</Option>
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
          <Button2 type="submit" to={`/menu/${restoId}`}>
            Pesan menu minuman & makanan
          </Button2>
          <ButtonPesan
            type="submit"
            onClick={authTokens ? openPayChoose : LoginFirst}
            to="#"
          >
            Reservasi tanpa pemesanan menu
          </ButtonPesan>
          <ChoosePayment
            payChoose={payChoose}
            setPayChoose={setPayChoose}
            setPayConfirm={setPayConfirm}
          />
          <PaymentConfirm
            payConfirm={payConfirm}
            setPayConfirm={setPayConfirm}
            setPayChoose={setPayChoose}
            setPayResult={setPayResult}
            date={date}
            timeReserv={timeReserv}
            comment={comment}
            inOut={inOut}
            people={people}
            restoId={restoId}
            bukti={1}
          />

          <SuccessPayment payResult={payResult} setPayResult={setPayResult} />
        </ButtonWrapper>
      </Pemesanan>
    </Container>
  );
};

export default MenuAndReserve;
