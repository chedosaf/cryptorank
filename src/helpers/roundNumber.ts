const roundStringNumber = (inputStr: string,) => {
  if(inputStr === '0') return '0'
  if(Number(inputStr) % 1 === 0) return inputStr


  const num = parseFloat(inputStr);

  const decimalPart = inputStr.split(".")[1];

  const nonZeroIndex = decimalPart.search(/[1-9]/);

  const decimalCount = nonZeroIndex !== -1 ? nonZeroIndex + 1 : decimalPart.length;

  const roundedNum = parseFloat(num.toFixed(decimalCount));

  const resultStr = roundedNum.toFixed(decimalCount);

  return resultStr;

}

export default roundStringNumber;