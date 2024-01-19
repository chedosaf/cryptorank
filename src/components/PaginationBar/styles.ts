import NextImage from 'next/image';
import styled from "styled-components";

export const PaginationConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 24px;
  padding: 24px;
`;

export const PagesConteiner = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

export const StyledImage = styled(NextImage)`
  cursor: pointer;
`;