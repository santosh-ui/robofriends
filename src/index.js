import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Hello greeting={"Hello React Ninja"} intro={"Hi, I am Santosh"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
