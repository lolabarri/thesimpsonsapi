import React from "react";
import styled from "@emotion/styled";

const Quote = styled.p`
  color: black;
  border-radius: 4px;
  padding: 10px;
  max-width: 55%;
  margin: auto;
  position: relative;
  background: #ffffff;
  border-radius: 0.4em;
  `

export const SimpsonsCard = props => {
  return (
    <div>
      <Quote className="speech-bubble">{props.quote}</Quote>
      <br />
      <img alt="Simpsons' character" src={props.image} />
      <p>{props.character}</p>
    </div>
  );
};
