### what is page in Next.js ?

##

A page is UI that is unique to a route . we can use nested folders to define a route and a page.js file to make the route publicly accessible.

````bash
app(root)
 - page.js
 - dashboard
 -- page.js
  note : we have app folder at root and inside app we have page.js and dashboard .
  inside dashboard we have another page.js .
 we can acces the page inside app to given path  "/" and to access page inside dashboard we can give path "/dashboard"

```bash
note-
-- A page is always the leaf of the route subtree.
-- .js, .jsx, or .tsx file extensions can be used for Pages.
-- A page.js file is required to make a route segment publicly accessible.
-- Pages are Server Components by default but can be set to a Client Component.
````

### what is layout in next.js ?

##

A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render.
you can define a layout like we are exporting a react component from layout.js file .

### how to create layout ?

##

```bash
You can define a layout by default exporting a React component from a layout.js file. The component should accept a children prop that will be populated with a child layout (if it exists) or a child page during rendering.
```

```bash
note
-- The top-most layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain html and body tags.
-- .js, .jsx, or .tsx file extensions can be used for Layouts.
-- A layout.js and page.js file can be defined in the same folder. The layout will wrap the page.
-- Layouts are Server Components by default but can be set to a Client Component.
-- Layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop
-- Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.

```

### what is root layout in next.js ?

##

root layout is layout
at the top level of the app directory and applies to all routes. This layout enables you to modify the initial HTML returned from the server.

### what is conditional Layout ?
##
when there is a condition to render a layout over each child root is known as conditional layout . 

### Get Route name ny Hook ?
## 
To get Route name we can use "usePathname" Hook .


### how to apply condition with route name ?
##
```bash
"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathName= usePathname()
  console.log(pathName)
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1 className="pl-20 pt-10">it is render inside every child root
            </h1>
           {
            pathName!=="/about/form" ?
           
            <ul className="flex justify-evenly md: w-[50%] text-blue-800 font-bold text-lg pt-5">
              <li> <Link href='/about'> About</Link> </li>
              <li><Link href="/contact"> contact</Link> </li>
              <li> <Link href='/about/form'> Form</Link> </li>
                       
            </ul>:<div className="py-4 text-red-700 font-bold">due to conditional layout navItems are not showing on this route"/about/form"</div>
           }
        {children}
      </body>
    </html>
  );
}

```
### what is usePath ?
##
usePathname is a Client Component hook that help  you to read the current URL's pathname.
```bash
'use client'
 
import { usePathname } from 'next/navigation'
export default function RootLayout({ children }) {
  const pathName= usePathname()

  return <p>Current pathname: {pathname}</p>
}
```

### what is Dynamic Routes ?
##
To create a Dynamic route we should create folder inside [] bracket .
```bash

```

### make a folder and file for the Dynamic route ?
##
```bash
-app(root)
--page.js
--studentList
--- page.js
--- [student]
---- page.js
```
file path :localhost:3000/studentList/dynamic-path

app is a root path and inside app we have page.js (which is render at localhost) and studentList folder .studenList folder have page.js (which is render on path localhost:3000/studentList) and[sudent] folder . [student] folder is dynamic and has page.js which is render on path "localhost:3000/studentList/"

### Write code and navigation ?
##

### How to get Dynamic route name ?
##
```bash
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
```
 
### what is the segments of the route ?
##
[...folder name] is known as catch all segment.

[folder name] is known as segment
### how to get all segments of route ?
##
first make your component client side component using "use client" and then we use "useParams()" hook which is return an object with the current route's filled in dynamic parameter .
useParams does not take any value.

[...folder name] is known as catch all segment.

[folder name] is known as segment
```bash
suppose we are a file path like app/about/[...name]/page.js
this is render on localhost like localhost 3000/about/name
if we pass multiple route after about then it will return a params {about:["name]}




```
### how to get route name from url ?
##
 using "useParams()" hook which is return an object with the current route's filled in dynamic parameter .
