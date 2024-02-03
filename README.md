### What is routing in Next.js ?

##

routing is a fundamental concept in web development that involves determining how a web application responds to user requests for specific URLs.

### how to create Routes ?

##

the folder name will match the route name and page.js will should be present in every folder.

```bash
suppose we want ot create a route like localhost:3000/about
then first we want to create a about folder and inside about folder we should to create a page.js file .
```

### what is the pattern for creating page in Next.js ?

##

Inside your Next.js project, create a folder named "pages" in the root directory.

```bash
- pages
  - index.js       // Represents the "/" route
  - about.js       // Represents the "/about" route
  - contact.js     // Represents the "/contact" route
```

### Do we need to install any package for routing in Nex.js ?

##

Next.js uses file system based router . so we don't need to install any packages .

### What is Linking and navigation ?

##

#### Linking :

Linking is the process of creating hyperlinks or anchor tags (<a> tags) that connect different pages or resources on the web.
and in Next.js <Link> component is used for creating links between pages within a Next.js application. It provides a way to create client-side navigation links, enhancing the user experience by preventing full page reloads.


```bash
"use client";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <h1 className="pb-10">I am home page</h1>
      <div
        onClick={() => {
          alert("hello world");
        }}
      >
        <button className="border-2 bg-gray-50 px-2 py-2">click me</button>
      </div>
      <Link href="/about" className="pt-10">Got to about page</Link>
      <Link href="/contact" className="pt-10">Got to contact page</Link>
    </main>
  );
}
```

##

#### Navigation :

Navigation is the act of moving from one page or location to another within a web application. It involves the user interacting with links, buttons, or other elements to go from one part of the application to another.
in Next.js it specially refers to the process of moving between pages within a Next.js application. This can be done using the <Link> component for declarative navigation or programmatically using the useRouter hook.

```bash
"use client"
import { useRouter } from "next/navigation" ;
import Link from "next/link" ;
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

```

### How to make Links ?

##

In Next.js, we can use the Link component from the next/link module to create links between pages in your application.

```bash
/ Example: pages/index.js
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Next.js App!</h1>

      {/* Example Link usage */}
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
};

export default HomePage;
```
### How to make Navigation BetWeen Nested pages ?

##
```bash
"use client"
import { useRouter } from "next/navigation" ;
import Link from "next/link" ;
import React from "react";

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
```


### what is Nested Routing ?

##

Nested routing in Next.js refers to the concept of organizing your application's routes in a hierarchical structure.


### How to make Nested Routing ?

##

### what is pattern for nested Routing ?
