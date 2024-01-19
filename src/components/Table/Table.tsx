import React from 'react';

import Pagination from '../PaginationBar/PaginationBar';
import { StickyTd, StickyTh, StyledTable, Td, Th, Thead, Tr } from './styles';

type Props = {
  headerItems: string[];
  currencies?: any[];
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

const Table = ({
  headerItems,
  currencies = [],
  selectedPage,
  setSelectedPage,
  totalPages,
}: Props) => {
  return (
    <>
      <StyledTable>
        <Thead>
          <Tr>
            {headerItems.map((item, i) => {
              if (i === 0) return <StickyTh key={item + i}>{item}</StickyTh>;
              return <Th key={item + i}>{item}</Th>;
            })}
          </Tr>
        </Thead>
        <tbody>
          {currencies.map((currency: any) => {
            return (
              <Tr key={currency.id}>
                <StickyTd>{currency.name}</StickyTd>
                <Td>{currency.price}</Td>
                <Td>{currency.circulatingSupply}</Td>
                <Td>{currency.marketCap}</Td>
                <Td>{currency.category}</Td>
                <Td>{(currency.price, currency['24h'])}</Td>
                <Td>{(currency.price, currency['7d'])}</Td>
                <Td>{(currency.price, currency['30d'])}</Td>
                <Td>{(currency.price, currency['3m'])}</Td>
                <Td>{(currency.price, currency['6m'])}</Td>
              </Tr>
            );
          })}
        </tbody>
      </StyledTable>
      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Table;
