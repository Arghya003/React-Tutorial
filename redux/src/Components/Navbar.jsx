import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items=useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex", alignItems:'center',justifyContent:"space-between"}}>
          <span className='Logo' style={{ marginLeft: "12px", fontSize:"25px",fontWeight: "bold" }}>REDUX STORE</span>
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className="navLink" to="/cart">Cart</Link>
            
            <span style={{marginLeft:"12px", fontWeight:"bold"}} className='cart count'> Cart items:{items.length}</span>
        </div>
      
    </div>
  )
}

export default Navbar
