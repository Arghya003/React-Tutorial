import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        //The Code that we want to run
        //Mounting starts
        console.log("The Count is",count)


        //optional return function
        //For unmounting
        return()=>{
            console.log("I am being cleaned Up")
        }

    },[count]) //variable inside the dependancy array for updating

    useEffect(()=>{
        fetch("http://idkapi.com/users")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data);
            //setData[data]
        })
    })




  return (
    <div>
        <h1>The count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count -1)}>decrease</button>
      
    </div>
  )
}

export default Counter
