import React from "react";
import styled from "styled-components";
import Price from "../../media/img/price.svg";
import Rate from "../../media/img/rate.svg";
import Food from "../../media/img/food.svg";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const P = styled.p`
font-size: 1.8rem;
padding-right: 1rem;
`;

export const Icon = styled.div`
  background-image: url(${(props) =>
    props.rate ? Rate : props.food ? Food : Price});
  width: 16px;
  height: 16px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.2rem;
  padding-left: 1rem;
`;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  margin: 0.4rem 2em;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const Indicator = styled.div`
  border: 1px solid #ccc;
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -1.5em;

  ${Label}:hover & {
    background: #ff7a45;
    border: 0 solid;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    border: solid #ff7a45;
    border-radius: 1em;
    background-color: #ff7a45;
    width: 2rem;
    height: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${Label}:hover & {
      background: none;
      border: 0 solid;
    }
  }
`;

export default function RadioButton({ value, onChange, name, id, label }) {
  return (
    <Label>
      {label}
      <Input
        id={id}
        type="radio"
        role="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}
