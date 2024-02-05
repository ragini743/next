"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children }) {
  const params =useParams()
  console.log(params)
  console.log(Object.keys(params).length)
  return (
    <html lang="en">
      <body className={inter.className}>
       { Object.keys(params).length!==0?(
        <h1>hello I am root layout</h1>
        ):null}{children}
        </body>
    </html>
  );
}
