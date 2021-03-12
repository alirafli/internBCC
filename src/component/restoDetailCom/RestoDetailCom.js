import React from "react";
import {
  Information,
  Detail,
  DetailUp,
  DetailDown,
  TitleOne,
  ParagraphOne,
  DetailMaps,
  Maps,
  Salin,
  Score,
  Bold,
} from "./StyleRestoDetailCom";

const restoDetailCom = ({ alamat, rate, ulasan }) => {
  return (
    <Information>
      <Detail>
        <DetailUp>
          <TitleOne>Kontrak Restoran</TitleOne>
          <ParagraphOne>08:00 WIB - 12:00 WIB</ParagraphOne>
          <ParagraphOne>021-14045</ParagraphOne>
          <ParagraphOne>kopisam@gmail.com</ParagraphOne>
          <ParagraphOne>kopisam.com</ParagraphOne>
        </DetailUp>
        <DetailDown>
          <TitleOne>Tentang Restoran</TitleOne>
          <ParagraphOne>Protokol COVID-19</ParagraphOne>
          <ParagraphOne>Indoor</ParagraphOne>
          <ParagraphOne>Outdoor</ParagraphOne>
        </DetailDown>
        <DetailMaps>
          <Maps />
          <ParagraphOne space>{alamat}</ParagraphOne>
          <div>
            <Salin>Salin</Salin> <Salin>Peta</Salin>
          </div>
        </DetailMaps>
      </Detail>
      <Score>
        <div style={{marginBottom: "3rem"}}>
          <TitleOne>Penilaian & ulasan</TitleOne>
          <ParagraphOne none>
            <Bold>{rate}.0</Bold>, {ulasan} ulasan
          </ParagraphOne>
        </div>
        <div style={{marginBottom: "3rem"}}>
          <TitleOne>Kategori</TitleOne>
          <ParagraphOne none>Kopi, Cepat saji</ParagraphOne>
        </div>
        <div style={{marginBottom: "3rem"}}>
          <TitleOne>Koleksi</TitleOne>
          <ParagraphOne none>Kopi, Cepat saji</ParagraphOne>
        </div>
      </Score>
    </Information>
  );
};

export default restoDetailCom;
