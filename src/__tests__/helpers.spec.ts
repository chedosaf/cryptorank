import calculateHystoryPrice from '@/helpers/calculateHystoryPrice'
import formatCurrenciesData from '@/helpers/formatCurrenciesData';
import formatNumber from '@/helpers/formatNumber';

import data from './mock/response.json'
import result from './mock/result.json'

describe("Format Number", () => {
  it("returns correct format ", () => {
    expect(formatNumber('0')).toEqual('0');
    expect(formatNumber('1')).toEqual('1');
    expect(formatNumber('1000')).toEqual('1.00K');
    expect(formatNumber('1000000')).toEqual('1.00M');
    expect(formatNumber('1000000000')).toEqual('1.00B');
    expect(formatNumber('1000000000000')).toEqual('1.00T');
  });
});

describe("Format Currencies Data", () => {
  it("returns correct format ", () => {
    expect(formatCurrenciesData(data)).toEqual(result);
  });
  it("returns empty array if arg empty array", () => {
    expect(formatCurrenciesData([])).toEqual([]);
  });
});

describe("Calculate Hystory Price", () => {
  it("returns correct format ", () => {
    expect(calculateHystoryPrice('100', '20')).toEqual('120');
  });
  it("returns empty array if arg empty array", () => {
    expect(calculateHystoryPrice('100', '-20')).toEqual('80');
  });
});