import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from 'config/rootReducer'
import rootSagas from 'config/rootSagas';
import createSagaMiddleware from 'redux-saga';
import './src/index.less';
import App from 'components/App';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  rootReducer,
  devToolsEnhancer(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
