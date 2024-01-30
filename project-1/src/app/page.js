"use client";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello world</h1>
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


