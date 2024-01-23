import React from 'react';
import Big from 'big.js';

import type { ICurrency } from '@/api/types';
import CurrencySelect from '@/components/CurrencySelect';
import NumberInput from '@/components/NumberInput';
import formatNumber from '@/helpers/formatNumber';

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

  const bigFrom = new Big(fromPrice);
  const bigTo = new Big(toPrice);
  return bigTo.div(bigFrom).toNumber();
};
interface ISelectContainerProps {
  currencieAmount: string;
  initialValue: ICurrency | undefined;
  convertedValue: ICurrency | undefined;
  handeleSelect: React.Dispatch<React.SetStateAction<ICurrency | undefined>>;
  setCurrencieAmount: React.Dispatch<React.SetStateAction<string>>;
  currencies: ICurrency[];
  result?: boolean;
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
          <ResultContainer>{`$ ${formatNumber(
            (
              Number(currencieAmount) *
              convertCurrencie(
                initialValue as ICurrency,
                convertedValue as ICurrency,
              )
            ).toString(),
          )}`}</ResultContainer>
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
