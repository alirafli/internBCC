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
} from "./StyleReservationWithMenu";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
// import { useAuth } from "../../config/Auth";
import { withRouter } from "react-router-dom";
import Restaurant from "../../api/forUserLogin";
import RadioButton from "../../component/priceChoice/StylePriceChoice";
import ChoosePayment from "../../component/paymentPopup/ChoosePayment";
import PaymentConfirm from "../../component/paymentPopup/PaymentConfirm";
import SuccessPayment from "../../component/paymentPopup/SuccessPayment";

const ReservationWithMenu = (props) => {
  const FoodRestoId = props.match.params.id;
  const [makanMinum, setMakanMinum] = useState([{ foodId: 1, quantity: 2 },{ foodId: 2, quantity: 2 }]);
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
  // const { authTokens } = useAuth();
  useEffect(() => {
    const fetchFood = async () => {
      const res = await Restaurant.get(`/food/foods/${FoodRestoId}`);
      getFood(res.data.data);
      // console.log(res.data.data);
    };
    const fetchDrink = async () => {
      const res = await Restaurant.get(`/food/drink/${FoodRestoId}`);
      getDrink(res.data.data);
      // console.log(res.data.data);
    };
    fetchFood();
    fetchDrink();
  }, [FoodRestoId]);
  // console.log(makanMinum)
  return (
    <>
      <NavbarBackground />
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
          <TitleOne tengah>Tanggal Reservasi</TitleOne>

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
            <ButtonPesan type="submit" onClick={openPayChoose} to="#">
              Reservasi
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
              restoId={FoodRestoId}
              bukti={2}
              makanMinum = {makanMinum}
            />

            <SuccessPayment payResult={payResult} setPayResult={setPayResult} />
          </ButtonWrapper>
        </Pemesanan>
      </Container>
    </>
  );
};

export default withRouter(ReservationWithMenu);
