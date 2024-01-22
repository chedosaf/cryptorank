import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  width: 100%;
  background: none;
  border: none;
  font-size: 32px;
  &:focus {
    outline: none;
    box-shadow: none;
    }
`;