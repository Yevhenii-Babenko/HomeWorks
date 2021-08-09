import React from 'react';
import PropTypes from 'prop-types';
import { TypeColor } from '../../types';

export const ColorList = ({ colors }) => (
  <div>
    <h3>Available Colors</h3>
    <ul>
      {colors.map(color => (
        <li
          key={color.id}
          style={{ color: color.hex }}
        >
          {color.name}
        </li>
      ))}
    </ul>
  </div>
);

ColorList.propTypes = {
  colors: PropTypes.arrayOf(TypeColor).isRequired,
};