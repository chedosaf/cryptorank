'use client';
import { useMemo } from 'react';
import useSWR from 'swr';

import fetcher from '@/api/fetcher';
import { FULL_CURRENCIES_PATH } from '@/api/paths';
import ConverterContainer from '@/components/Converter';
import { StyledMain } from '@/components/Layouts/MainLayout/styles';
import LoaderSpiner from '@/components/LoaderSpiner';

const Converter = () => {
  const { error, isLoading, data = [] } = useSWR(FULL_CURRENCIES_PATH, fetcher);

  const currencies = useMemo(() => {
    if (isLoading) return [];
    return data.data;
  }, [data, isLoading]);

  if (error) return <div>Failed to load currencies</div>;
  if (isLoading) return <LoaderSpiner />;

  return (
    <StyledMain>
      <h1>Cryptocurrency Converter Calculator!</h1>
      <ConverterContainer currencies={currencies} />
    </StyledMain>
  );
};

export default Converter;
