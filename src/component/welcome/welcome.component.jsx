import React, { useEffect, useState } from "react";
import { Column } from "../column";
import { SectionTitle } from "../section-title";
import * as WS from "./welcome.style";
import { get } from "axios";
import { Button } from '../button'

const Welcome = () => {
  const [welcome, updateWelcome] = useState({});

  useEffect(() => {
    const getResult = async () => {
      const { data } = await get("http://localhost:4567/welcome");
      updateWelcome(data);
    };
    getResult();
  }, []);

  const { person, jobTitle, sectionDescription, sectionTitle } = welcome;

  return (
    <>
      <Column>
        <SectionTitle>Welcome to My CV</SectionTitle>
      </Column>
      <Column height={10} />
      <WS.DesktopWrap>
        <Column>
          <WS.StyledH1>
            {person && person.firstName} {person && person.lastName}{''}
          </WS.StyledH1>
        </Column>
        <Column>
          <WS.StyledH2>{jobTitle}</WS.StyledH2>
        </Column>
        <Column>
          <WS.StyledH3>{sectionTitle}</WS.StyledH3>
        </Column>
        <Column>
          <WS.StyledDiv>
            <WS.StyledP>{sectionDescription}</WS.StyledP>
          </WS.StyledDiv>
        </Column>
        <Column height={10} />
        <Column display="flex">
          <Button 
          icon="download"
          label="Download my CV">
          </Button>
        </Column>
        <Column height={10} />
        <Column display="flex">
          <Button 
          icon ="arrow-down"
          background="green"
          />
        </Column>
      </WS.DesktopWrap>
      <Column height={10} />
    </>
  );
};

export { Welcome };
