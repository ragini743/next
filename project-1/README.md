This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





# today what I have learned
### what is server side and client side rendering ?
in server side rendering server generates html  for each page request  and send html to the client. server execute react code and send the resulting code to the client .to use server side rendering for a page we just export async function ,called getServerSideProps .
In client side rendering , the server sends a minimal HTML page to the client, and the browser then downloads and executes JavaScript to render the content.
### how to add event in next.js ?
we can use event inside client side rendering because in CSR the code is execute inside browser.
so we need to add "use client" at top of the component.
it means we are render over component on client side .

### how to call a function inside component?
we can call a function inside next.js like as react .
```
export const About = () => {
  function call() {
    alert("ram");
  }
  return <div onclick={call}>hello</div>;
};
```
### how to make a component inside a component ?
we can make a component inside Next.js like as React js.
```
const Data = () => {
  return (
    <div>
      <p>good day ! </p>
    </div>
  );
};
export const About = () => {
  return (
    <div>
      <div>hello</div>
      <Data />
    </div>
  );
};
```
### what is difference between <Component /> and {Compoent()} ?
<Component /> : It is often used when rendering components without any specific logic or data manipulation. it is standard JSX syntax for rendering a React component.
```
import AnotherComponent from './AnotherComponent';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello from MyComponent</h1>
      <AnotherComponent />
    </div>
  );
};
```

{Component()} : It can be useful when you need to conditionally render a component or when you want to pass dynamic data to the component. in this we can include JavaScript expressions and logic within the curly braces.
```
import AnotherComponent from './AnotherComponent';

const MyComponent = () => {
  const condition = true;

  return (
    <div>
      <h1>Hello from MyComponent</h1>
      {condition ? <AnotherComponent /> : null}
    </div>
  );
};

export default MyComponent;

```