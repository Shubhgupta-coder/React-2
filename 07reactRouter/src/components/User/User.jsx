import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    // both the way are correct
    // const {userid}= useParams()  //now we can use userid which are given in link 
    const params = useParams();
  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>
        {/* Both the way are correct */}
      {/* User:{userid} */}
      User:{params.userid}  
    </div>
  )
}

export default User
