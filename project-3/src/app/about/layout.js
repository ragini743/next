"use client"
import React from 'react'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div className='pl-20'>
        <h1>I am about layout and I am render indide every about child roots<br></br> 
        here form is child root of about .so it is render inside form .
        </h1>
   
     <div className='border-2 border-gray-300 px-2 py-1 inline '>
        <Link href ="/">Home</Link>
     </div>
        {children}
    </div>
  )
}

export default layout