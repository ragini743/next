"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useParams } from "next/navigation";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children }) {
  const params =useParams()
  const ref=useRef()
  console.log("ref",ref)
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
