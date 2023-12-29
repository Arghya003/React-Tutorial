import React,{useContext}from 'react'
import { CartContext } from '../Context/Cart'

const Cart = () => {
    const cart=useContext(CartContext)
    const total=cart.items.reduce((a,b)=>a+b.price,0)
  return (
    <div className='cart'>
        <h1>Cart</h1>

        {
            cart&& cart.items.map(item=><li>{item.name}-{item.price}</li>)
        }
        <h3>Total Bill :${total}</h3>
      
    </div>
  )
}

export default Cart
