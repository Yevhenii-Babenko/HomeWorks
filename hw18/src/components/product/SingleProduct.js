import React from 'react';
import PropTypes from 'prop-types';

export const SingleProduct = ({ name, color }) => (
  <>
    <strong>{name}</strong>
    {' - '}
    {color}
  </>
);


SingleProduct.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

SingleProduct.defaultProps = {
  color: '',
};