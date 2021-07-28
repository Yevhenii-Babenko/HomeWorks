import React from 'react';
import PropTypes from 'prop-types';

export const Theme = ({ primaryColor, secondaryColor }) => (
  <div className="Theme">
    <h3 className="Theme__title">Current theme</h3>
    <div className="Theme__content">
      <label>
        1st:&nbsp;
        <strong>{primaryColor.name}</strong>
        <input type="color" value={primaryColor.hex} />
      </label>
    </div>
  </div>
);

const TypeColor =  PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

Theme.propTypes = {
  primaryColor: TypeColor.isRequired,
  secondaryColor: TypeColor.isRequired
}
