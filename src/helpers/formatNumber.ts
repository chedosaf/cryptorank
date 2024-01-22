import roundNumber from './roundNumber'

const TRILLION = 1e12;
const BILLION = 1e9;
const MILLION = 1e6;
const THOUSAND = 1e3;
 

const formatNumber = (number: number, decimalPlace: number = 2):string  =>  {
  if (number >= TRILLION) {
    return (number / TRILLION).toFixed(decimalPlace) + 'T';
  } else if (number >= BILLION) {
      return (number / BILLION).toFixed(decimalPlace) + 'B';
  } else if (number >= MILLION) {
      return (number / MILLION).toFixed(decimalPlace) + 'M';
  } else if (number >= THOUSAND) {
      return (number / THOUSAND).toFixed(decimalPlace) + 'K';
  } else {
      return roundNumber(number, number >= 1 ? 2 : 5).toString();
  }
}

export default formatNumber;