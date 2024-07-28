import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
   const data =  useLoaderData() // we  paas githubInfoloader in main.jsx and here we get data which we get from fetch using useLoaderdata
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ankur-Sh')
    //     .then((response)=> {return response.json()})
    //     .then(data=>setData(data))  //jo hmara paas api se result aaya h use 
    // },[])
  return (
    // jb bhi hamar github waala page render hga tb ye github waali api launch hogi
   
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>  
  )
}

export default Github


export const githubInfoloader = async ()=>{
   const response = await fetch('https://api.github.com/users/Ankur-Sh')
   return response.json();
}