'use client';
import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

import fetcher from '@/api/fetcher';
import { FULL_CURRENCIES_PATH } from '@/api/paths';
import { StyledMain } from '@/components/Layouts/MainLayout/styles';
import LoaderSpiner from '@/components/LoaderSpiner';
import Table from '@/components/Table';
import formatCurrenciesData from '@/helpers/formatCurrenciesData';

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

const CURRENCIES_PER_PAGE = 20;

const Watchlist = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const offset = CURRENCIES_PER_PAGE * (selectedPage - 1);

  const fetchParams = new URLSearchParams({
    limit: CURRENCIES_PER_PAGE.toString(),
    offset: offset.toString(),
  });

  const {
    error,
    isLoading,
    data = [],
  } = useSWR(FULL_CURRENCIES_PATH + fetchParams, fetcher);

  const currencies = useMemo(() => {
    if (isLoading) return [];
    return formatCurrenciesData(data.data);
  }, [data, isLoading]);

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
