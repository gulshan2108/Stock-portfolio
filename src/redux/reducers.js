
import { combineReducers } from "redux";
import StockReducer from "./Stocks/Stocks.reducer"

const rootReducer = combineReducers ({
    stock: StockReducer
});
export default rootReducer;