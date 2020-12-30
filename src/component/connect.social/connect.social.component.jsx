import React from "react";
import { Icon } from "../icomoon";
import { StyledSocialButton } from "./connect.social.style";

const SocialButton = ({ icon, label, onClick, background, isSelected }) => {
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
      isSelected={isSelected}
      onClick={onClick}
      background={background}
    >
      <Icon {...socialProplist} /> {label}
    </StyledSocialButton>
  );
};
export { SocialButton };
