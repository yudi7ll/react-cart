import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import { checkAuth } from './actions';

const store = createStore(
  reducers,
  applyMiddleware(
	thunkMiddleware
  )
);

store.dispatch(checkAuth());

store.subscribe(() => console.log(store.getState()));

render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
);
