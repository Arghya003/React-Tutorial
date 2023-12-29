import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRef = () => {

    // 1.DOM Reference
    // 2. useRef for storing the previous state
    // 3. holds mutable value prevent re-render of component

    const[name,setName]=useState("")
    const[counter,setCounter]=useState(0)
    const inputEl=useRef("")
    const prevCounterRef=useRef("")
    console.log(inputEl)
    const resetInput=()=>{
        setName("")
        inputEl.current.focus();
    }
    useEffect(()=>{
        prevCounterRef.current=counter;

    },[counter])
  return (
    <div className='App'>
        <input 
        ref={inputEl}
        name='name'
        autoComplete='off'
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <div>
              <button onClick={resetInput}>reset</button>
        </div>
        
        <div>
            <h1>my name is {name}</h1>
        </div>
        <div>
            <h1>Random Counter:{counter}</h1>
            {typeof prevCounterRef.current!==undefined && (
                <h2>Previous Counter:{prevCounterRef.current}</h2>
            )}
            <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}>
                Generate Number
            </button>

        </div>
      
    </div>
  )
}

export default UseRef

