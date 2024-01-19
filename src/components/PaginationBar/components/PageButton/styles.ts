import styled from "styled-components";

export const StyledPageButton = styled.div<{ $selected?: boolean; }>`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.$selected ? "#0587ff":  "#424961"};
  border-radius: 4px;
  max-width: 100%;
  padding: 0 8px;
  background: ${(props) => props.$selected ? "#e8f1f2":  "none"};
  cursor: pointer;
`