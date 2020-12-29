import styled from "styled-components";

export const StyledSocialButton = styled.div`
  background-color: ${({ isSelected }) => (isSelected ? "#d52027" : "#1875F0")};
  height: 68px;
  width: 68px;
  border-radius: 50%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
