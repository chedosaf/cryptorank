import Big from 'big.js';

const calculateHystoryPrice = (currentPrice: string , percentageChange: string ) => {
  if (!currentPrice || !percentageChange) {
    return '';
  }
  const priceBig = new Big(currentPrice);
  const percentChangeBig = new Big(percentageChange);

  const historicalPriceBig = priceBig.plus(priceBig.div(100).times(percentChangeBig))

  return historicalPriceBig.toString();
}

export default calculateHystoryPrice;