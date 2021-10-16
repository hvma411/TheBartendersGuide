import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './index.scss';
import { store } from './redux/store';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root')
)
