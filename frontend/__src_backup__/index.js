import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { isLoggedIn } from './reducers';
import { checkAuth } from './actions';
import App from './components/app';

const reducers = combineReducers({
  isLoggedIn
});

const store = createStore(
  reducers,
  applyMiddleware(
	thunkMiddleware
  )
);

store.dispatch(checkAuth())
  .then(() => console.log(store.getState()));

render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.querySelector('#root')
);
