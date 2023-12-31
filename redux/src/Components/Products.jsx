import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{add} from"../Store/cartSlice"
import { fetchProducts } from '../Store/productsSlice'
import {STATUSES} from '../Store/productsSlice'

const Products = () => {
   // const[products,setProducts]=useState([])
    const dispatch = useDispatch()
    const{data:products,status}=useSelector((state)=>state.product)

    useEffect(()=>{
        dispatch(fetchProducts())
        // const fetchProducts=async()=>{
        //     const res= await fetch("https://fakestoreapi.com/products")
        //     const data= await res.json();
        //     console.log(data)
        //     setProducts(data)

        // } 
        // fetchProducts()
    },[])

    const handleAdd=(product)=>{
        dispatch(add(product))
        


    }

    if(status===STATUSES.LOADING){
        return <h2>Loading.....</h2>
    }

  return (
    <div className='productsWrapper'>
        {
            products.map(product=>(
                <div className='card' key={product.id}>
                    <img src={product.image}/>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>{
                        handleAdd(product)
                    }} className='btn'>Add to Cart</button>
                </div>
            ))
        }
      
    </div>
  )
}

export default Products
