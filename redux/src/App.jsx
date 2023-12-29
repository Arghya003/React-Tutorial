import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'
import Navbar from './Components/Navbar.jsx'
import {Provider} from"react-redux"
import store from './Store/store.jsx'

const App = () => {
  return (
    <>
    <Provider store={store}>

  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
      </Provider>
     </>
      
      
    
  )
}

export default App
