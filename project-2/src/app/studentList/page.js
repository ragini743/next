import Link from "next/link";

const array =[
    {
        name:"Ram",
        id:"1",
    },
    {
        name:"Shyam",
        id:"2",
    },
    {
        name:"Krishna",
        id:"3",
    },
    {
        name:"Radha",
        id:'4',
    },
]

const page = () => {
  return (
    <div className="font-bold text-lg pl-10 pt-5 ">
       <h1> STUDENT LIST</h1>
       <ul>
        {array.map((data)=>{return (
            
            <li className="hover:text-blue-700"> <Link key={data.id} href={"/studentList/"+data.name}> {data.name} </Link> </li>
            
        )})}
      
       </ul>
    </div>
  )
}

export default page ;