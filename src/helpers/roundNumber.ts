const roundNumber = (value: number, decimalPlace: number = 0) => {
  // change errors 
  if (isNaN(value)) {
    throw new Error('Invalid input. Please provide a valid number.');
  }

  if (isNaN(decimalPlace) || decimalPlace < 0) {
    throw new Error('Invalid decimal places. Please provide a non-negative integer.');
  }

  const multiplier = 10 ** decimalPlace;
  const roundedValue = Math.round(value * multiplier) / multiplier;

  return roundedValue;
}

export default roundNumber;