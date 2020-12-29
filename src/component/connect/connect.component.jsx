import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Column } from "../column";
import { get } from "axios";
import { SectionTitle } from "../section-title";
import { DesktopWrap } from "../welcome/welcome.style";
import { ButtonWrapper, ConnectWrap } from "./connect.style";
import { ConnectImg } from "../connect-img";
import { SocialButton } from "../connect.social";
import { SocialWrapper } from "../connect.info";

const Connect = () => {
  const [connect, updateConnect] = useState({});
  const [selected, updateSelected] = useState({});

  useEffect(() => {
    const getResult = async () => {
      const { data } = await get("https://localhost:4567/connect");
      updateConnect(data);
    };
    getResult();
  }, []);
  const { socialList = {} } = connect;

  const handleClick = (social) => {
    updateSelected(social);
  };

  const closeTheModal = () => {
    updateSelected({});
  };

  return (
    <>
      <Column>
        <SectionTitle>Meet Me</SectionTitle>
      </Column>
      <Column height={10} />
      <Column height={10} />
      <Column height={10} />
      <DesktopWrap>
        <Column>
          <ConnectWrap>
            <ConnectImg />
            <ButtonWrapper>
              {Object.values(socialList || {}).map((social) => {
                return (
                  <SocialButton
                    issSelected={social.icon === selected.icon}
                    key={social.icon}
                    onClick={() => {
                      handleClick(social);
                    }}
                    icon={social.icon}
                  />
                );
              })}
            </ButtonWrapper>
          </ConnectWrap>
        </Column>
        <Column height={10} />
        <Column>
          {selected.hasOwnProperty("title") && (
            <SocialWrapper {...selected} handleClose={closeTheModal} />
          )}
        </Column>
        <Column display="flex">
          <Button icon="arrow-down" background="green" />
        </Column>
      </DesktopWrap>
    </>
  );
};

export { Connect };
