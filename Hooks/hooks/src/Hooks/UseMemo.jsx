import React, { useMemo, useState } from 'react'

//Used for Optimisng the code

const UseMemo = () => {

    //
    //1.Optimise expensive operation
    //2. referential equality

    const[counter,setCounter]=useState(1)
    // const result=factorial(counter);
    const result=useMemo(()=>{
        return factorial(counter)
    },[counter])
    const[name,setName]=useState("")
  return (
    <div className='App'>
        <h1>
            Fcatorial of {counter} is :<span>{result}</span>
        </h1>
        <div>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>
              <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
        <hr></hr>
        <div>
            <div>
                <label>Enter Name</label>
            </div>
            <input
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
              <p>{`My name is ${name}`}</p>

            <hr></hr>
           {/* <DisplayName name={name}></DisplayName> */}

        </div>
      
    </div>
  )
}

// const DisplayName=React.memo(({name})=>{
//     console.log("rendered")
//     return <p>{`My name is ${name}`}</p>
// })
function factorial(n){
    let i=0;
    while(i<2000000)i++;
    if(n<0)
    return -1;
    if(n==0)
    return 1;

    return n*factorial(n-1);

}

export default UseMemo
