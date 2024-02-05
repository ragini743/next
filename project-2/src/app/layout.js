"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="pl-20 pt-10">it is render inside every child root
        </h1>
        <h2 className="text-green-700 font-bold ml-10 text-lg">for a Dynamic Route go to 
        <Link href="/studentList" className="text-blue-700 pl-4">  studentList</Link> </h2>

        {pathName !== "/about/form" ? (
          <ul className="flex justify-evenly md: w-[50%] text-blue-800 font-bold text-lg pt-5">
            <li>
              {" "}
              <Link href="/about"> About</Link>{" "}
            </li>
            <li>
              <Link href="/contact"> contact</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/about/form"> Form</Link>{" "}
            </li>
          </ul>
        ) : (
          <div className="py-4 text-red-700 font-bold">
            due to conditional layout navItems are not showing on this
            route"/about/form"
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
