'use client';
// import useSWR from 'swr';
// import fetcher from '@/api/fetcher';
// import { ICryptocurrency } from '@/api/types';
import { StyledMain } from '@/components/Layouts/MainLayout/styles';

// import LoaderSpiner from '@/components/LoaderSpiner/LoaderSpiner';

// interface IData {
//   data: ICryptocurrency[];
//   meta: {
//     count: number;
//   };
// }
// rewrite with limit / offset and separate this logic from this module
// const API =
//   'https://api.cryptorank.io/v1/currencies/2?api_key=8374d69a061a9e248d38570af973671c3c8ecca4c11f9461ff4763aa373f&limit=10&offset=0';

const Converter = () => {
  // const { error, isLoading, data } = useSWR<IData>(API, fetcher);

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <LoaderSpiner />;

  return (
    <StyledMain>
      <h1>Cryptocurrency Converter Calculator!</h1>
      <button>Refresh</button>
      <button>Reset</button>
    </StyledMain>
  );
};

export default Converter;
