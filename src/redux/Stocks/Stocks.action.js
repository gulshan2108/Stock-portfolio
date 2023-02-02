import * as TYPES from './Stocks.type'

export function getStocks() {
    return {
      type: TYPES.GET_STOCKS,
    };
};