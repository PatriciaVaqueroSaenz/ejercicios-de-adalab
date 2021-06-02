import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.css';
import ItemList from './components/ItemList';

ReactDOM.render(
  <React.StrictMode>
    <ItemList />
  </React.StrictMode>,
  document.getElementById('root')
);
