import React from 'react';

import { StyledInput } from './styles';

interface INumberInputProps {
  placeholder: string;
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

const NumberInput = ({ placeholder, value, onChange }: INumberInputProps) => {
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(value))) return;
    onChange(Number(value));
  };
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default NumberInput;
