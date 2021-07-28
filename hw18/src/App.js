import './App.css';
import React from 'react';

import { ProductList } from './components/product/ProductList';
import { Theme } from './components/product/Theme';

import productsFromServer from './data/product.json';

const availableColors = [
  { id: 1, name: 'red', hex: '#FF0000' },
  { id: 2, name: 'green', hex: '#00FF00' },
  { id: 3, name: ' blue', hex: '#0000FF' }
];

const App = () => {
  return (
  <div>
    <h1>Test products</h1>
      <ProductList products={productsFromServer}/>
  </div>
  )
}

export default App;
