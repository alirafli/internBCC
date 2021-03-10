import React from "react";
import {
  Container,
  MenuResto,
  TitleOne,
  ParagraphOne,
  Pemesanan,
  DatePick,
} from "./StyleMenuAndReserve";

const MenuAndReserve = () => {
  return (
    <Container>
      <MenuResto>
        <TitleOne>Menu</TitleOne>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ParagraphOne>Nasi Goreng</ParagraphOne>
          <ParagraphOne>Rp. 40.000</ParagraphOne>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ParagraphOne>Nasi Goreng</ParagraphOne>
          <ParagraphOne>Rp. 40.000</ParagraphOne>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ParagraphOne>Nasi Goreng</ParagraphOne>
          <ParagraphOne>Rp. 40.000</ParagraphOne>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ParagraphOne>Nasi Goreng</ParagraphOne>
          <ParagraphOne>Rp. 40.000</ParagraphOne>
        </div>
      </MenuResto>
      <Pemesanan>
        <TitleOne>Reservasi Meja</TitleOne>
        <ParagraphOne style={{ margin: "1.5rem 0" }}>
          Tersedia 20 kursi
        </ParagraphOne>
        <DatePick type="date" name="dateofbirth" id="dateofbirth" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ margin: "1.5rem 0" }}>
            <TitleOne>Waktu Reservasi</TitleOne>
          </div>
          <div style={{ margin: "1.5rem 0" }}>
            <TitleOne>Jumlah Orang</TitleOne>
          </div>
        </div>
      </Pemesanan>
    </Container>
  );
};

export default MenuAndReserve;
