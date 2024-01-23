import { useState } from 'react';

import type { ICurrency } from '@/api/types';

import ConvertButton from './components/ConvertButton';
import SelectContainer from './components/ConverterSelectContainer/ConverterSelectContainer';
import { ConverterContainer } from './styles';

interface IConverterProps {
  currencies: ICurrency[];
}

const Converter = ({ currencies }: IConverterProps) => {
  const [currencieAmount, setCurrencieAmount] = useState<string>('1');

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
        result
      />
    </ConverterContainer>
  );
};

export default Converter;
