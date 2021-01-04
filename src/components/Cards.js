import React, { useState } from "react";
import styled from "styled-components/macro";

export default function Cards({ imgSrc }) {
  const [clicked, setClicked] = useState(false);

  return (
    <CardContainer activated={clicked} onClick={() => setClicked(!clicked)}>
      <div activated={clicked} />
      <img src={imgSrc} alt="Bild" />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 180px;
  height: 180px;
  background-color: black;
  position: relative;
  div {
    background-color: ${(props) => (props.activated ? "transparent" : "green")};
    /*background-color: ${(props) => console.log(props.activated)};*/
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
