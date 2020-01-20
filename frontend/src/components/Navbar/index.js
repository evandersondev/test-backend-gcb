import React from "react";

import { Container } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <Container>
      <a href="/">
        <h1>GCB</h1>
      </a>
      <ul>
        <a
          target="_blank"
          href="https://github.com/evansCodes/test-backend-gcb"
        >
          {<FaGithub />}
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/evanderson-vasconcelos/"
        >
          {<FaLinkedin />}
        </a>
      </ul>
    </Container>
  );
};

export default Navbar;
