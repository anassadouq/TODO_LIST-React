import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './TODO_LIST/App';

import { Provider } from 'react-redux';
import {legacy_createStore} from 'redux';
import reducer from './TODO_LIST/Config/Reducer';
const store = legacy_createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);