import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <GlobalStyle />
    </div>
  );
}

export default App;
