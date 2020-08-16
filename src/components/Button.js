import React from "react";
import styled from "@emotion/styled";

const ButtonStyle = styled.a`
  color: black;
  border-radius: 4px;
  padding: 10px;
  max-width: 70%;
  margin: auto;
  position: relative;
  background: #ffffff;
  border-radius: 0.4em;
  text-decoration: none;
  `

export const Button = props => {
  return (
    <div>
      <ButtonStyle href="/">Want another?</ButtonStyle>
    </div>
  );
};