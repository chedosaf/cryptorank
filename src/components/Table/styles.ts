import styled from "styled-components";

export const StyledTable = styled.table`
  max-width: 100%;
  margin-top: 24px;
  border-collapse: collapse;
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;
`;

export const Thead = styled.thead`
  background: #eef4fa;
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const Tr = styled.tr`
  width: 100%;
  height: 60px;
`;

export const Th = styled.th`
  min-width: 152px;
  padding: 0 24px;
  text-align: start;
`;

export const StickyTh = styled(Th)`
  position: sticky;
  left: -1%;
  min-width: 152px;
  white-space: normal;
  background: #eef4fa;
  z-index: 10;
`;


export const Td = styled.td`
  min-width: 152px;
  padding:0 24px;
`;

export const StickyTd = styled(Td)`
  background: #e8f1f2;
  position: sticky;
  left: -1%;
  text-align: start;
  font-weight: 600;
  white-space: normal;
`;
