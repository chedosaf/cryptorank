'use client';
import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

import fetcher from '@/api/fetcher';
import { StyledMain } from '@/components/Layouts/MainLayout/styles';
import LoaderSpiner from '@/components/LoaderSpiner';
import Table from '@/components/Table';
import formatCurrenciesData from '@/helpers/formatCurrenciesData';

// add ts for SWR

// rewrite with limit / offset and separate this logic from this module

const API =
  'https://api.cryptorank.io/v1/currencies/?api_key=8374d69a061a9e248d38570af973671c3c8ecca4c11f9461ff4763aa373f&limit=30&offset=0';

const tableHeaderItems = [
  'Name',
  'Price USD',
  'Circulating Supply',
  'Market Cap',
  'Category',
  'HQuotation (24h)',
  'HQuotation (7d)',
  'HQuotation (30d)',
  'HQuotation (3m)',
  'HQuotation (6m)',
];

const CURRENCIES_PER_PAGE = 10;

const Watchlist = () => {
  const { error, isLoading, data } = useSWR(API, fetcher);

  const currencies = useMemo(() => {
    if (isLoading) return [];
    return formatCurrenciesData(data.data);
  }, [data, isLoading]);

  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!isLoading) {
      setTotalPages(Math.ceil(data.meta.count / CURRENCIES_PER_PAGE));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (error) return <div>Failed to load currencies</div>;
  if (isLoading) return <LoaderSpiner />;

  return (
    <StyledMain>
      <h1>Public watchlist</h1>
      <Table
        headerItems={tableHeaderItems}
        currencies={currencies}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        totalPages={totalPages}
      />
    </StyledMain>
  );
};

export default Watchlist;
