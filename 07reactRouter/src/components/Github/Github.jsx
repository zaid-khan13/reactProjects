import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const[data, setdata] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/user/shiteshchoudhary')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)
        
    // }

    // )
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img className='text-center' src="{data.avatar_url}" alt="Git picture" width={300}/>
    </div>
    
      
   
  )
}

export default Github
