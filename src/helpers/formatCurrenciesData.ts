import type { ICurrency, IFCurrency } from "@/api/types";

import calculateHystoryPrice from "./calculateHystoryPrice";
import formatNumber from "./formatNumber";

const formatCurrenciesData = (data: ICurrency[]): IFCurrency[] => {
  return data.map((item) => {
    const currency = {
      id: item.id,
      name: item.name + ' ' + item.symbol,
      price: formatNumber(item.values?.USD.price?.toString()) ? `$ ${formatNumber(item.values?.USD.price?.toString())}` : '',
      circulatingSupply:
        item.symbol + ' ' + formatNumber(item.circulatingSupply?.toString()),
      marketCap: formatNumber(item.values?.USD.marketCap?.toString()) ? `$ ${formatNumber(item.values?.USD.marketCap?.toString())}` : '',
      category: item.category,
      '24h': formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString() ,
          item.values?.USD.percentChange24h?.toString(),
        ),
      ) ? `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString() ,
          item.values?.USD.percentChange24h?.toString(),
        ),
      )}` : '',
      '7d': formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange7d?.toString(),
        ),
      ) ? `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange7d?.toString(),
        ),
      )}` : '',
      '30d': formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange30d?.toString(),
        ),
      ) ? `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange30d?.toString(),
        ),
      )}` : '',
      '3m': formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange3m?.toString(),
        ),
      ) ? `$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange3m?.toString(),
        ),
      )}` : '',
      '6m': formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange3m?.toString(),
        ),
      ) ?`$ ${formatNumber(
        calculateHystoryPrice(
          item.values?.USD.price?.toString(),
          item.values?.USD.percentChange6m?.toString(),
        ),
      )}` : '',
    };
    return currency;
  })
}

export default formatCurrenciesData;