import React, { useState } from 'react'

const UseState = () => {
    const [name,setName]=useState("")
    const [names,setNames]=useState([]);
    const[flag,setFlag]=useState(false)
    
    function addNames(e){
        e.preventDefault();
        setNames(...names,{id:names.length,name:name})
        setName("")
    }
    function changeName(){
        return setFlag(!flag);
    }

    
  return (
    <div className='App'>
        <h1>Hello {flag?name:""}</h1>
        <form onSubmit={addNames}>
            <input type='text' value={name} placeholder='add your name' 
            onChange={(e)=>setName(e.target.value)}/>
        </form>
      <button className='m-4 text-xl rounded-md' onClick={changeName}> Submit</button>
    </div>
  )
}

export default UseState
