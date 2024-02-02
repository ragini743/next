"use client"
import { useRouter } from "next/navigation" ;
import Link from "next/link" ;
import React from "react";
// import { useRouter } from "next/router";

const page = () => {
  const router = useRouter()
  return (
    <div className="pt-10 pl-10">
        <h1>
            hello I am Raginee Vishwakarma

        </h1>
        <h1>I am from UP .</h1>
        <button onClick={() => {router.push("/about/form")}} className="border-gray-500 border-2 px-2 py-1 mt-10"> Go to form</button>
         
         <div className="mt-10 ">
         <Link href="/" className="border-b-2 border-blue-600 text-black font-bold hover:text-blue-900"> Go to home page</Link>
         </div>
    </div>
  )
}

export default page