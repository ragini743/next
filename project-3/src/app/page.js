"use client"

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pl-5 pt-5">
        <h1 className="pb-10">I am home page</h1>
      <div
        onClick={() => {
          alert("hello world");
        }}
      >
        <button className="border-2 bg-gray-50 px-2 py-2">click me</button>
      </div>
    </main>
  );
}
