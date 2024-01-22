import NextImage from 'next/image';
import styled from "styled-components";

// add to common styles folder
export const StyledImage = styled(NextImage)`
  cursor: pointer;
`;

export const ConverterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  height: 300px;
  width: 100%;
  border-radius: 20px;
  box-shadow: #41535908 0px 12px 12px;
  font-size: 32px;
  @media (max-width: 900px){
    flex-direction: column;
    margin-top: 60px;
  }
`;

