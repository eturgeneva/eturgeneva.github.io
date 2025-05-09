// Import createStore and combineReducers here.
import { createStore, combineReducers} from 'redux';
// Import the slice reducers here.
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { cartReducer } from '../features/cart/cartSlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
// Create and export the store here.
const reducers = {
  inventoryReducer: inventoryReducer,
  cartReducer: cartReducer,
  currencyFilterReducer: currencyFilterReducer,
  searchTermReducer: searchTermReducer
}
export const store = createStore(combineReducers(reducers));