import type { ICurrency, IFCurrency } from "@/api/types";

import calculateHystoryPrice from "./countHQuotation";
import formatNumber from "./formatNumber";

const formatCurrenciesData = (data: ICurrency[]): IFCurrency[] => {
  return data.map((item) => {
    const currency = {
      id: item.id,
      name: item.name + ' ' + item.symbol,
      price: `$ ${formatNumber(item.values?.USD.price)}`,
      circulatingSupply:
        item.symbol + ' ' + formatNumber(item.circulatingSupply),
      marketCap: `$ ${formatNumber(item.values?.USD.marketCap)}`,
      category: item.category,
      '24h': `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price,
          item.values?.USD.percentChange24h,
        ),
      )}`,
      '7d': `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price,
          item.values?.USD.percentChange7d,
        ),
      )}`,
      '30d': `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price,
          item.values?.USD.percentChange30d,
        ),
      )}`,
      '3m': `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price,
          item.values?.USD.percentChange3m,
        ),
      )}`,
      '6m': `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price,
          item.values?.USD.percentChange6m,
        ),
      )}`,
    };
    return currency;
  })
}

export default formatCurrenciesData;