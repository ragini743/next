"use client"
import { useRouter } from "next/navigation" ;
import Link from "next/link" ;

const page = () => {
  const router =useRouter()
  return (
    <div className="pt-10 pl-10">
        <h1>
            hello I am Raginee Vishwakarma

        </h1>
        <h1>I am from UP .</h1>
        <button onClick={() => {router.push("/form")}}> Go to form</button>
         
        <Link href="/"> go to home page</Link>
    </div>
  )
}

export default page