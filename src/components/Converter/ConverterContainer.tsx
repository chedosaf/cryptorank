import { useState } from 'react';

import type { ICurrency } from '@/api/types';
import formatNumber from '@/helpers/formatNumber';

import ConvertButton from './components/ConvertButton';
import SelectContainer from './components/ConverterSelectContainer/ConverterSelectContainer';
import { ConverterContainer } from './styles';

interface IConverterProps {
  currencies: ICurrency[];
}

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

const Converter = ({ currencies }: IConverterProps) => {
  const [currencieAmount, setCurrencieAmount] = useState<number>(1);

  const [selectedCFrom, setSelectedCFrom] = useState<ICurrency | undefined>(
    currencies ? currencies[0] : undefined,
  );
  const [selectedCTo, setSelectedCTo] = useState<ICurrency | undefined>(
    currencies ? currencies[1] : undefined,
  );

  const handleSwitchCurriensies = () => {
    setSelectedCFrom(selectedCTo);
    setSelectedCTo(selectedCFrom);
  };

  return (
    <ConverterContainer>
      <SelectContainer
        currencieAmount={currencieAmount}
        initialValue={selectedCFrom}
        convertedValue={selectedCTo}
        handeleSelect={setSelectedCFrom}
        setCurrencieAmount={setCurrencieAmount}
        currencies={currencies}
      />
      <ConvertButton handleClick={handleSwitchCurriensies} />
      <SelectContainer
        currencieAmount={currencieAmount}
        initialValue={selectedCTo}
        convertedValue={selectedCFrom}
        handeleSelect={setSelectedCTo}
        setCurrencieAmount={setCurrencieAmount}
        currencies={currencies}
        // fix as ICurrency
        result={`$ ${formatNumber(
          currencieAmount *
            convertCurrencie(
              selectedCTo as ICurrency,
              selectedCFrom as ICurrency,
            ),
        )}`}
      />
    </ConverterContainer>
  );
};

export default Converter;
