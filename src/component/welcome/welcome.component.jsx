import React, { useEffect, useState } from 'react';
import * as WS from './welcome.style';



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
    descriptionTitle,
    sectionDescription
  } = welcome

  return (
    <>
      <Column>
        <SectionTitle> Welcome to My CV</SectionTitle>
      </Column>
      <Column height={10} />
      <WS.DesktopWrap>
        <Column>
          <WS.StyledH1>{person && person.firstName} {person && person.lastName} </WS.StyledH1>
        </Column>
      </WS.DesktopWrap>
    </>
  )

}

export { Welcome }