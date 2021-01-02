import React from "react";
import { Welcome } from "../welcome";
import { StyledAppWrapper } from "./app.style";
import { Connect } from "../connect";
import { Skill } from "../skill/skill.components";

const App = () => {
  return (
    <StyledAppWrapper>
      <Welcome />
      <Connect />
      <Skill />
    </StyledAppWrapper>
  );
};

export { App };
