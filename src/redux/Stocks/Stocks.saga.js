import { call, put, takeEvery, all } from "redux-saga/effects";
import { getStockApi } from "../Api/StocksApi"
import * as TYPES from './Stocks.type'


function* getStocks() {
    try {
        const result = yield call(getStockApi);
        yield put({ type: TYPES.SUCCESS , payLoad: result });
    } catch (e) {
        yield put({ type: TYPES.ERROR, message: e });
    }
}

function* watchStockSaga(){
	yield takeEvery(TYPES.GET_STOCKS, getStocks);
}

export default function* stockSaga() {
	yield all([watchStockSaga()]);
}