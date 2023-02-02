import * as TYPES from './Stocks.type'

const initialState = {
    loading: false,
    stockData:[],
    error:false
  }

  const StockReducer = (state = initialState, action)=>{
    switch (action.type) {
        case TYPES.STOCK_LOADING:
            state = { ...state, loading: true };
            break;
        case TYPES.SUCCESS:
            state = { ...state, stockData: action.payLoad, loading: false };
            break;
        case TYPES.ERROR:
            state = {
                ...state,
                error:true,
                loadingPosts: false,
            };  
            break;
        default:
            return state
    }
   return state  
  }

export default StockReducer;
  