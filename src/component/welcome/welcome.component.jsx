import React, { useEffect, useState } from 'react';
import * as WS from './welcome.style';
import { get } from 'axios';
import { Column } from '../column';
import { SectionTitle } from '../section-title';



const Welcome = () => {
  const [welcome, updateWelcome] = useState({})

  useEffect(
    () => {
      const getResult = async () => {
        const { data } = await get("http://localhost:4567/welcome")
        updateWelcome(data)
      }
      getResult()
    },
    []
  )

  const {
    person,
    jobTitle,
    sectionDescription,
  } = welcome

  return (
    <>
      <Column>
        <SectionTitle> Welcome to My CV</SectionTitle>
      </Column>
      <Column height={10} />
      <WS.DesktopWrap>
        <Column>
          <WS.StyledHH>{person && person.firstName} {person && person.lastName} {person && person.nickName} </WS.StyledHH>
        </Column>
        <Column>
          <WS.StyledH2>{jobTitle}</WS.StyledH2>
        </Column>
        <Column>
          <WS.StyledH3>{SectionTitle}</WS.StyledH3>
        </Column>
        <Column>
          <WS.StyledDiv>
            <WS.StyledP>{sectionDescription}</WS.StyledP>
          </WS.StyledDiv>
        </Column>
      </WS.DesktopWrap>

    </>
  )
}

export { Welcome }