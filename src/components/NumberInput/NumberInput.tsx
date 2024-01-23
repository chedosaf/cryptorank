import React from 'react';

import { StyledInput } from './styles';

interface INumberInputProps {
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const NumberInput = ({ placeholder, value, onChange }: INumberInputProps) => {
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(value))) return;
    onChange(value);
  };
  return (
    <StyledInput
      maxLength={20}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default NumberInput;
