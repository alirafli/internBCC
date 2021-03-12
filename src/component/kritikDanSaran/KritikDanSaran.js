import React, { useState } from "react";
import {
  Container,
  Left,
  Right,
  TextContent,
  Input,
  Space,
  Button,
} from "./StyleKritikDanSaran";
import KritikDanSarannya from "../../api/forUserLogin";
import swal from "sweetalert";

const KritikDanSaran = () => {
  const [nama, setNama] = useState("");
  const [telpon, setTelpon] = useState("");
  const [email, setEmail] = useState("");
  const [komen, setKomen] = useState("");

  let count = 0;

  const SendKritik = () => {
    KritikDanSarannya.post("/suggest/register", {
      name: nama,
      phone: telpon,
      email: email,
      content: komen,
    }).then((res) => {
      if (count < 0) {
        SendKritik();
        count++;
      }
      swal("Terima kasih Kritik dan Sarannya!", ``, "success");
      console.log(res);
      console.log("selesai");
    });
  };
  return (
    <Container>
      <Left>
        <TextContent>Nama</TextContent>
        <TextContent>No. Telepon</TextContent>
        <TextContent>E-mail</TextContent>
        <TextContent>Kritik & Saran</TextContent>
      </Left>
      <Right>
        <Space>
          <Input
            label="Nama lengkap"
            type="text"
            rows={1}
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </Space>
        <Space>
          <Input
            label="No. telepon aktif"
            type="text"
            rows={1}
            onChange={(e) => {
              setTelpon(e.target.value);
            }}
          />
        </Space>
        <Space>
          <Input
            label="E-mail aktif"
            type="email"
            rows={1}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Space>
        <Space>
          <Input
            label="Tuliskan kritik dan saran untuk restology di sini ..."
            type="text"
            multiline
            rows={4}
            onChange={(e) => {
              setKomen(e.target.value);
            }}
          />
        </Space>
        <Space btn>
          <Button onClick={SendKritik}>Kirim</Button>
        </Space>
      </Right>
    </Container>
  );
};

export default KritikDanSaran;
