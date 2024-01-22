const roundNumber = (value: number, decimalPlace: number = 0) => {
  if (isNaN(value)) {
    return ''
  }

  if (isNaN(decimalPlace) || decimalPlace < 0) {
    throw new Error('Invalid decimal places. Please provide a non-negative integer.');
  }

  const multiplier = 10 ** decimalPlace;
  const roundedValue = Math.round(value * multiplier) / multiplier;

  return roundedValue;
}

export default roundNumber;