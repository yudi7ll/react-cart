import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import Signup from '../Signup';
import Login from '../Login';
import ProductList from '../Products';

const Routes = () => (
  <>
  <Route exact path="/" component={Home} />
  <Route path="/signup" component={Signup} />
  <Route path="/login" component={Login} />
  <Route path="/products" component={ProductList} />
  </>
);

export default Routes;
