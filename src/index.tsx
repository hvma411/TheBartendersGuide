import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>INIT</div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
)
