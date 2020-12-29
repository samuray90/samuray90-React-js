import React from "react";
import { Welcome } from "../welcome";
import { StyledAppWrapper } from "./app.style";
import { Connect } from "../connect";

const App = () => {
  return (
    <StyledAppWrapper>
      <Welcome />
      <Connect />
    </StyledAppWrapper>
  );
};

export { App };
