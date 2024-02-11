import React from 'react'
import "./Product.css"

function Product({result}) {
  return (
    <div className='card-component'>{result}</div>
  )
}

export default Product