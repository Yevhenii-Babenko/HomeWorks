import React from 'react'

const Product = ({
  title,
  price,
  description
}) => {
  return (
    <div>
      <h2>
        { title }
      </h2>
      <p>
        Price: { price } 
      </p>
      <p> 
        { description } 
      </p>
  </div>
  )
}

Product.defaultProps = {
  price: 0,
  description: 'no description'
}

export default Product