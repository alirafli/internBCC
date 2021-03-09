import React from "react";
import RadioButton, {
  Container,
  Title,
  Wrapper,
  Icon,
  RateWrapper,
  P,
} from "../priceChoice/StylePriceChoice";
import RateIcon from "../../media/img/rate.svg";
import json2mq from "json2mq";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const RatingChoice = () => {
  // const [radioValue, setRadio] = useState(0);
  const rates1 = [1];
  const rates2 = [1, 2];
  const rates3 = [1, 2, 3];
  const rates4 = [1, 2, 3, 4];
  const rates5 = [1, 2, 3, 4, 5];
  let keys = 0;
  // console.log("Rating: " + radioValue);

  const matches = useMediaQuery(
    json2mq({
      minWidth: 530,
    })
  );

  return (
    <Container>
      <Wrapper>
        <Icon rate />
        <Title> Rating</Title>
      </Wrapper>
      <Wrapper>
        <RadioButton
          label={
            matches ? (
              rates1.map(() => (
                <img
                  key={(keys += 1)}
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              ))
            ) : (
              <RateWrapper>
                <P>1</P>
                <img
                  key={(keys += 1)}
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              </RateWrapper>
            )
          }
          name="radio"
          value={1}
          // onChange={(e) => {
          //   setRadio(e.target.value);
          // }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label={
            matches ? (
              rates2.map(() => (
                <img
                  key={(keys += 1)}
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              ))
            ) : (
              <RateWrapper>
                <P>2</P>
                <img
                  key={(keys += 1)}
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              </RateWrapper>
            )
          }
          name="radio"
          value={2}
          // onChange={(e) => {
          //   setRadio(e.target.value);
          // }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label={
            matches ? (
              rates3.map(() => (
                <img
                  key={(keys += 1)}
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              ))
            ) : (
              <RateWrapper>
                <P>3</P>
                <img
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              </RateWrapper>
            )
          }
          name="radio"
          value={3}
          // onChange={(e) => {
          //   setRadio(e.target.value);
          // }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label={
            matches ? (
              rates4.map(() => (
                <img
                  key={(keys += 1)}
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              ))
            ) : (
              <RateWrapper>
                <P>4</P>
                <img
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              </RateWrapper>
            )
          }
          name="radio"
          value={4}
          // onChange={(e) => {
          //   setRadio(e.target.value);
          // }}
        />
      </Wrapper>

      <Wrapper>
        <RadioButton
          label={
            matches ? (
              rates5.map(() => (
                <img
                  key={(keys += 1)}
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              ))
            ) : (
              <RateWrapper>
                <P>5</P>
                <img
                  src={RateIcon}
                  alt="Logo"
                  style={{ paddingRight: ".5rem" }}
                />
              </RateWrapper>
            )
          }
          name="radio"
          value={5}
          // onChange={(e) => {
          //   setRadio(e.target.value);
          // }}
        />
      </Wrapper>
    </Container>
  );
};

export default RatingChoice;
