export interface ICurrency {
  category: string;
  circulatingSupply: number;
  id: number;
  lastUpdated: string;
  name: string;
  rank: number;
  slug: string;
  symbol: string;
  tokens: any[];
  totalSupply: number;
  type: string;
  values: {
    USD: {
      high24h: number;
      low24h: number;
      marketCap: number;
      percentChange3m: number;
      percentChange6m: number;
      percentChange7d: number;
      percentChange24h: number;
      percentChange30d: number;
      price: number;
      volume24h: number;
    };
  };
  volume24hBase: number;
}

export interface IFCurrency {
  id: number;
  name: string;
  price: string;
  circulatingSupply: string;
  marketCap: string;
  category: string;
  '24h': string;
  '7d': string;
  '30d': string;
  '3m': string;
  '6m': string;
  }