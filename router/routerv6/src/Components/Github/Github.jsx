import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
 const data=   useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Arghya003")
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log((data));
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
          <h1> Github Name:{data.name}</h1>
          <img src={data.avatar_url} width={300} className='ml-12'/>
      <h1> Github Followers:{data.followers}</h1>
          <h1> Github Followers:{data.following}</h1>
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
  const response=  await fetch("https://api.github.com/users/Arghya003");
  return response.json()
}
