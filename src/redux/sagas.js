
import { all } from "redux-saga/effects"
import stockSaga from "./Stocks/Stocks.saga"

export default function* rootSaga(){
    yield all([
        stockSaga()
    ]);
}