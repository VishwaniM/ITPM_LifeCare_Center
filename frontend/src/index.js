import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk  from 'redux-thunk';


const store = createStore(compose(applyMiddleware(thunk)) )

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
