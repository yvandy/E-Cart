import React, { useState } from 'react'
import './ItemDetails.css'

const ItemDetails = props => {
  const fromCart = props.fromCart
  // const fromShop = props.fromShop;

  return (
    <div className='individual_div'>
      <span> Item : {props.name}</span>
      <div> {props.image}</div>
      <div> Price: {props.price}</div>

      {fromCart ? (
        <button
          onClick={(event) => { props.remove(props.name) }}
        >
          Remove
        </button>
      ) : (
        <button
          onClick={event => { props.addToCart(props) }}>
          Add to Cart
        </button>
      )}

    </div>
  )
}

export default ItemDetails
