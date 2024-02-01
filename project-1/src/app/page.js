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


