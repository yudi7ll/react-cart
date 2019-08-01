import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import category from './category';
import shipper from './shipper';
import cart from './cart';

const reducers = combineReducers({
  auth,
  products,
  category,
  shipper,
  cart
});

export default reducers;
