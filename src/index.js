import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { combineReducers, createStore } from 'redux';
import contactReducer from './redux/reducers/contactReducer';
import MessageReducer from './redux/reducers/messageReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({contact:contactReducer,message:MessageReducer})

const store =createStore(rootReducer,composeWithDevTools());

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
