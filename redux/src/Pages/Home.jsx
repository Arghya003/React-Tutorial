import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div >
      <h2 style={{ display: "flex", justifyContent: "center" }} className='heading'>Welcome to the Redux Toolkit Store</h2>
      <section>
        
          
          <Products/>
        
      </section>
    </div>
  )
}

export default Home
