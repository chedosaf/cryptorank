// change fnc name

const calculateHystoryPrice = (currentPrice: number, percentageChange: number) => {
  return currentPrice / (1 + percentageChange / 100);
}

export default calculateHystoryPrice;