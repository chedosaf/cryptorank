import Big from 'big.js';

import roundStringNumber from './roundNumber';

const TRILLION = 1e12;
const BILLION = 1e9;
const MILLION = 1e6;
const THOUSAND = 1e3;

const formatNumber = (value: string, decimalPlace: number = 2)  =>  {
  if(!value) {
    return ''
  }

  const bigNumber = new Big(value)

  if (bigNumber.abs().gte(TRILLION)) {

    return (bigNumber.div(TRILLION)).toFixed(decimalPlace) + 'T';

  } else if (bigNumber.abs().gte(BILLION)) {

    return (bigNumber.div(BILLION)).toFixed(decimalPlace) + 'B';

  } else if (bigNumber.abs().gte(MILLION)) {

    return (bigNumber.div(MILLION)).toFixed(decimalPlace) + 'M';

  } else if (bigNumber.abs().gte(THOUSAND)) {

    return (bigNumber.div(THOUSAND)).toFixed(decimalPlace) + 'K';

  }  else {
    return roundStringNumber(bigNumber.toFixed()).toString();
  }
}

export default formatNumber;