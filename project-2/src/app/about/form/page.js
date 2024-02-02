import Link from "next/link"
import React from "react"
const page = () => {
  return (
    <div className="pt-10 pl-10">
        <h1> I am form and child root of about .</h1>
        <div className="inline hover:text-blue-700 border-b-2 border-blue-900">
        <Link href="/">Go to home page</Link>
        </div>
       
    </div>
    
  )
}

export default page ;