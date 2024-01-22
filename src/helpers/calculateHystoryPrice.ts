const calculateHystoryPrice = (currentPrice: number, percentageChange: number) => {
  return currentPrice + (currentPrice/100 * percentageChange);
}

export default calculateHystoryPrice;