import React from 'react';

import type { ICurrency } from '@/api/types';
import CurrencySelect from '@/components/CurrencySelect';
import NumberInput from '@/components/NumberInput';

import {
  Amount,
  ConverterAmountContainer,
  ConverterSelectContainer,
  ResultContainer,
} from './styles';

const convertCurrencie = (from: ICurrency, to: ICurrency) => {
  const {
    values: {
      USD: { price: fromPrice },
    },
  } = from;
  const {
    values: {
      USD: { price: toPrice },
    },
  } = to;
  if (!fromPrice || !toPrice) return 0;
  return toPrice / fromPrice;
};
interface ISelectContainerProps {
  currencieAmount: number;
  initialValue: ICurrency | undefined;
  convertedValue: ICurrency | undefined;
  handeleSelect: React.Dispatch<React.SetStateAction<ICurrency | undefined>>;
  setCurrencieAmount: React.Dispatch<React.SetStateAction<number>>;
  currencies: ICurrency[];
  result?: string;
}

const SelectContainer = ({
  currencieAmount,
  initialValue,
  convertedValue,
  handeleSelect,
  setCurrencieAmount,
  currencies,
  result,
}: ISelectContainerProps) => {
  return (
    <ConverterSelectContainer>
      <ConverterAmountContainer>
        {result ? (
          <ResultContainer>{result}</ResultContainer>
        ) : (
          <NumberInput
            placeholder='0'
            value={currencieAmount}
            onChange={setCurrencieAmount}
          />
        )}
        <Amount>
          {initialValue && convertedValue
            ? `1 ${initialValue.symbol} = ${convertCurrencie(convertedValue, initialValue)} ${convertedValue?.symbol}`
            : ''}
        </Amount>
      </ConverterAmountContainer>
      <CurrencySelect
        options={currencies}
        initialValue={initialValue?.name}
        handleChange={handeleSelect}
      />
    </ConverterSelectContainer>
  );
};

export default SelectContainer;
