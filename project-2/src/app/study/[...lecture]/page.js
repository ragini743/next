"use client"

import { useParams } from "next/navigation"

const page = () => {
    const params = useParams()
    console.log(params)
  return (
    <div className="pl-4">
        <h1 className="decoration-slate-950 underline text-orange-800 text-lg font-bold">it is comming from segment</h1>
        <h1>first route {params.lecture[0]}</h1>
        <h1>second route{params.lecture[1]}</h1>
    </div>
  )
}

export default page ;