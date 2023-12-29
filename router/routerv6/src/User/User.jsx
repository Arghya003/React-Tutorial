import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id}=useParams()
  return (
    <div className='bg-gray-500 text-white flex justify-center text-3xl'>
        The User is :{id}
      
    </div>
  )
}

export default User
