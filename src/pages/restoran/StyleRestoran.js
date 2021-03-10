import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 5rem 8rem;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 4.8rem;
  line-height: 5.9rem;
`;

export const TitleOne = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  ${(props) => (props.space ? "margin: 2.3rem" : null)};
`;

export const ParagraphOne = styled.p`
  margin-top: 1.3rem;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 1.6rem;
  letter-spacing: 0.03em;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-areas:
    "banner banner photo1 photo2"
    "banner banner photo3 photo4";
  grid-gap: 1.7rem;
  height: 40rem;
  margin-top: 3rem;
`;

export const Banner = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  grid-area: banner;
  border-radius: 1rem;
`;

export const Photo1 = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  grid-area: photo1;
  border-radius: 1rem;
`;

export const Photo2 = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  grid-area: photo2;
  border-radius: 1rem;
`;

export const Photo3 = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  grid-area: photo3;
  border-radius: 1rem;
`;

export const Photo4 = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  grid-area: photo4;
  border-radius: 1rem;
`;

export const Information = styled.div`
  display: grid;
  grid-template-areas: "detail detail score";
  grid-gap: 1.7rem;
  height: 40rem;
  margin-top: 6rem;
`;

export const Detail = styled.div`
box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  grid-area: detail;
  display: grid;
  grid-template-areas:
    "detailUp detailMaps"
    "detailDown detailMaps";
    background: #F9F9F9
  grid-gap: 1.7rem;
  border-radius: 1rem;
  padding: 1.7rem;
`;

export const Score = styled.div`
box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
padding: 2rem 3rem;
background: #f9f9f9;
  grid-area: score;
  background: #F9F9F9
  border-radius: 1rem;
  border-radius: 1rem;
`;

export const DetailUp = styled.div`
  grid-area: detailUp;
  background: #f9f9f9;
`;
export const DetailDown = styled.div`
  grid-area: detailDown;
  background: #f9f9f9;
`;
export const DetailMaps = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: detailMaps;
  background: #f9f9f9;
`;

export const Salin = styled.button`
  border: 0.2rem solid #ff7a45;
  background: rgb(76, 175, 80, 0);
  margin-top: 2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  color: #ff7a45;
  border-radius: 1rem;
  line-height: 1.7rem;
  padding: 1rem 3rem 1rem 3rem;
  margin: 2rem 1.3rem;
  cursor: pointer;
`;

export const Maps = styled.div`
  width: 24.7rem;
  height: 17rem;
  background: red;
`;

export const MenuAndReserve = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-areas: "menuResto menuResto menuResto pemesanan";
`;

export const MenuResto = styled.div`
  grid-area: menuResto;
  margin: 1rem;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  background: #f9f9f9;
  padding: 3rem;
`;

export const Pemesanan = styled.div`
  grid-area: pemesanan;
  margin: 1rem;
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  background: #f9f9f9;
  padding: 2rem;
`;

export const Ulasan = styled.div`
  box-shadow: 0px 4px 5px rgba(34, 34, 34, 0.15);
  background: #f9f9f9;
  display: grid;
  grid-template-areas: "comment comment kosong";
`;

export const DatePick = styled.input`

`