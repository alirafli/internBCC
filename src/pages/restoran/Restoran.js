import React, { useState, useEffect } from "react";
import { NavbarBackground } from "../../component/navbar/StyleNavbar";
import {
  Container,
  Title,
  Gallery,
  Information,
  Ulasan,
  MenuAndReserve,
  Banner,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Detail,
  Score,
  DetailUp,
  DetailDown,
  DetailMaps,
  TitleOne,
  ParagraphOne,
  Maps,
  Salin,
  MenuResto,
  Pemesanan,
  DatePick,
} from "./StyleRestoran";
import Restaurant from "../../api/forUserLogin";
import Footer from "../../component/footer/Footer";

const Restoran = () => {
  const [restoDetail, getRestoDetail] = useState([]);
  const [image, setImage] = useState(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRestoDetail = async () => {
      setLoading(true);
      const res = await Restaurant.get("/restaurants/2");
      getRestoDetail(res.data.data);
      setImage(res.data.data.restoimgs);
      setLoading(false);
      // console.log(res.data.data.restoimgs[0]);
    };
    fetchRestoDetail();
  }, []);
  return (
    <>
      <NavbarBackground />
      {loading ? null : (
        <>
          <Container>
            <Title>{restoDetail.name}</Title>
            <Gallery>
              <Banner background={image[0].image} />
              <Photo1 background={image[1].image} />
              <Photo2 background={image[2].image} />
              <Photo3 background={image[3].image} />
              <Photo4 background={image[0].image} />
            </Gallery>
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
            <MenuAndReserve>
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
                <ParagraphOne style={{margin: "1.5rem 0"}}>Tersedia 20 kursi</ParagraphOne>
                <DatePick type="date" name="dateofbirth" id="dateofbirth" />
                <div style={{display: "flex", justifyContent:"space-between"}}>
                  <div style={{margin: "1.5rem 0"}}><TitleOne>Waktu Reservasi</TitleOne>
                  </div>
                  <div style={{margin: "1.5rem 0"}}><TitleOne>Jumlah Orang</TitleOne>
                  </div>
                </div>
              </Pemesanan>
            </MenuAndReserve>
            <Ulasan></Ulasan>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Restoran;
