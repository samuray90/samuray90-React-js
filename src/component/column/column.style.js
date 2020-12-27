import styled from "styled-components";

export const StyledColumn = styled.div`
  grid-column: 1/-1;
  display: ${({ display }) => display || "block"};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
`;
