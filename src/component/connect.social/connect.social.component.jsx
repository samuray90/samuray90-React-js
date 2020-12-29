import React from "react";
import { Icon } from "../icomoon";
import { StyledSocialButton } from "./connect.social.style";

const SocialButton = ({ icon, label, onClick, background, issSelected }) => {
  const socialIcon = (icon) => (icon ? icon : "codetap");
  const socialProplist = {
    color: "#fff",
    style: {
      width: 32,
      height: 32,
    },
    icon: socialIcon(icon),
  };

  return (
    <StyledSocialButton
      issSelected={issSelected}
      onClick={onClick}
      background={background}
    >
      <Icon {...socialProplist} /> {label}
    </StyledSocialButton>
  );
};
export { SocialButton };
