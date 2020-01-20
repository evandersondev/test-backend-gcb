import React from "react";

import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

const Alert = props => {
  const closeAlert = () => {
    props.setBlur(false);
  };
  return (
    <Container>
      <h1>Error!</h1>
      <p>
        Aluma informacao esta incorreta ou imcompleta, por favor verique e tente
        novamente.
      </p>
      <span onClick={closeAlert}>
        <FaTimes />
      </span>
    </Container>
  );
};

export default Alert;
