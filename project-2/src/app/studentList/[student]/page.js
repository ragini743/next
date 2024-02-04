"use client"
import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
    console.log("sdfgh",params)
  return (
    <div className='pt-10'>
        <Link href="/studentList" className='text-blue-800 font-bold'>Go back to studentList</Link>
        <p>student name: {params.student}</p>
    </div>
  )
}

export default page