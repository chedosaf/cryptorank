import React from 'react';

import type { ICurrency } from '@/api/types';

import { StyledSelect } from './styles';

interface ISelectProps {
  options: ICurrency[];
  initialValue: string | undefined;
  handleChange: React.Dispatch<React.SetStateAction<ICurrency | undefined>>;
}

const CurrencySelect = ({
  options,
  initialValue,
  handleChange,
}: ISelectProps) => {
  const handlerSelect = (currencieName: string) => {
    const selectedCurrency = options.find(
      (item: ICurrency) => item.name === currencieName,
    );
    if (selectedCurrency) {
      handleChange(selectedCurrency);
    }
  };

  return (
    <StyledSelect
      value={initialValue}
      onChange={({ currentTarget: { value } }) => handlerSelect(value)}
    >
      {options.map((option) => (
        <option key={option.id} value={option?.name}>
          {option.name}
        </option>
      ))}
    </StyledSelect>
  );
};

export default CurrencySelect;
