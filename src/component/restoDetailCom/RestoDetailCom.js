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
} from "./StyleRestoDetailCom";

const restoDetailCom = () => {
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
          <TitleOne space>Tentang Restoran</TitleOne>
          <div>
            <Salin>Salin</Salin> <Salin>Peta</Salin>
          </div>
        </DetailMaps>
      </Detail>
      <Score>
        <TitleOne>Penilaian & ulasan</TitleOne>
        <ParagraphOne>Kopi, Cepat saji</ParagraphOne>
        <TitleOne>Kategori</TitleOne>
        <ParagraphOne>Kopi, Cepat saji</ParagraphOne>
        <TitleOne>Koleksi</TitleOne>
        <ParagraphOne>Kopi, Cepat saji</ParagraphOne>
      </Score>
    </Information>
  );
};

export default restoDetailCom;
