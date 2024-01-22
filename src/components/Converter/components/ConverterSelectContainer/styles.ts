import styled from "styled-components";

export const ConverterSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 24px ;
  padding: 0 16px;
  min-height: 152px;
  width: 100%;
  border-radius: 20px;
  background: #eef4fa;
`;

export const ConverterAmountContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(173, 180, 193, 0.2);
`

export const Amount = styled.p`
  color: #789;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  font-size: 32px;
`
