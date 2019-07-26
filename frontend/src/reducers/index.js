import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import category from './category';
import shipper from './shipper';

const reducers = combineReducers({
  auth,
  products,
  category,
  shipper
});

export default reducers;
