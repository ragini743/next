### What is routing in Next.js ?
## 
### how to create Routes ?
##
the folder name will match the route name and page.js will should be present in every folder.
```bash
suppose we want ot create a route like localhost:3000/about
then first we want to create a about folder and inside about folder we should to create a page.js file .
```

### what is the pattern for creating page in Next.js ?
##
### Do we need to install any package  for routing in Nex.js ?
##
Next.js uses file system based router .
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
in Next.js it specially  refers to the process of moving between pages within a Next.js application. This can be done using the <Link> component for declarative navigation or programmatically using the useRouter hook.

```bash

```

### How to make Links ?
##
### 