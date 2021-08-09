import './App.css';
import React from 'react';
import Author from './homeWorkComponents/Author';
import PostContent from './homeWorkComponents/PostContent';
import { postOwner, contText } from './homeWorkComponents/postOwner';

/* import { ProductList } from './components/product/ProductList';
import { Theme } from './components/product/Theme';

import productsFromServer from './data/product.json'; */

/* const availableColors = [
  { id: 1, name: 'red', hex: '#FF0000' },
  { id: 2, name: 'green', hex: '#00FF00' },
  { id: 3, name: ' blue', hex: '#0000FF' }
];
 */

export default function App() {
  return (
    <div className="post" style={{ backgroundColor: '#15202B' }}>
      <Author {...postOwner} />
      <PostContent {...contText} />
    </div>
  );
}
