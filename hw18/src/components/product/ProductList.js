import React from 'react';
import PropTypes from 'prop-types';
import { SingleProduct } from './SingleProduct';

export const ProductList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <SingleProduct {...product} />
      </li>
    ))}
  </ul>
);


ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }),
  ),
}

ProductList.defaultProps = {
  products: [],
};