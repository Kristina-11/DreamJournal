import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import App from './App';

import dreamReducer from './store/dreams/dreamReducer';

const store: Store<DreamState, DreamAction> & {
  dispatch: DispatchDreamType
} = createStore(dreamReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

