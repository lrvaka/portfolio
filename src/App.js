import React from "react";
import Container from "./utilities/Container";
import Header from "./UI/Header/Header.js";
import Body from "./UI/Body/Body";

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Body />
      </Container>
    </React.Fragment>
  );
};

export default App;
