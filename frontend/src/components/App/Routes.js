import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import Signup from '../Signup';
import Login from '../Login';
import {
  ProductList,
  ViewProduct,
  ProductByCategory
} from '../Products';
import Cart from '../Cart';

const Routes = () => (
  <>
  <Route exact path="/" component={Home} />
  <Route path="/signup" component={Signup} />
  <Route path="/cart" component={Cart} />
  <Route path="/login"  component={Login} />
  <Route path="/products" component={ProductList} />
  <Route path="/category/:category" component={ProductByCategory} />
  <Route path="/product/catalog/:id" component={ViewProduct} />
  </>
);

export default Routes;
