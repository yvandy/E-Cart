import './App.css';
import ItemDetails from './Component/ItemDetails/ItemDetails'
import React, { useState } from 'react'

const App = () => {

  const DUMMY_DATA = [
    { id: Math.random(), name: 'okra', price: 10 },
    { id: Math.random(), name: 'potato', price: 20 },
    { id: Math.random(), name: 'bottlegourd', price: 20 },

  ]

  const [items, setItem] = useState(DUMMY_DATA);
  const [carts, setCart] = useState([]);
  const [bill, setBill] = useState();

  const addToMyCartHandler = cart_item => {
    const oldCart = [...carts];
    oldCart.push(cart_item);
    setCart(oldCart);
    totalBill()
  }
  const removeCartHandler = (name) => {

    console.log(name)
    //copy from state
    //update the copy
    //update the state
    const oldCart = [...carts];
    const updatedCart = oldCart.filter(function (obj) {
      return obj.name !== name;
    });
    setCart(updatedCart);
  }

  const totalBill = () => {
    let localBill = 0;
    carts.map((item) => {
      localBill += item.price;
    })
    setBill(localBill);
  }
  return (
    <div style={{ alignContent: "center" }}>
      {
        items.map((item, index) => {
          return (
            <ItemDetails
              name={item.name}
              price={item.price}
              key={item.name}
              addToCart={addToMyCartHandler}
              fromShop={true}
            />
          )
        })
      }
      <hr />

      <button > Show My Cart</button>
      <h1> My Cart</h1>
      {/* <button onClick={totalBill}> Total Bill  </button> */}

      <span>Total Bill : {bill}</span>
      {
        carts.map((item, index) => {
          return (
            <ItemDetails
              name={item.name}
              price={item.price}
              key={item.id}
              fromCart={true}
              remove={removeCartHandler}


            />
          )
        })
      }


    </div>
  )
}

export default App;
