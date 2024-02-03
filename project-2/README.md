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


