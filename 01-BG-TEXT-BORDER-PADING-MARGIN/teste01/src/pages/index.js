import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const flexCenter = "flex min-h-screen flex-col items-center justify-center";

const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6  inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default function Home() {
  const [prev, setPrev] = useState(false);
  const isOpen = (prev) => {
    setPrev(!prev);
  };

  return (
    <main className={`${flexCenter} p-5 ${inter.className}`}>
      <h1 className={`text-5xl text-cyan-600`}>Hello Tailwind</h1>

      <div className="relative">
        <button
          className="w-11/12 max-w-xl min-w-80 bg-cyan-50 h-10 rounded-md border-cyan-500 border-2 my-4"
          onClick={() => isOpen(prev)}
        >
          Dropdown
          {prev ? <ArrowUp /> : <ArrowDown />}
        </button>
         <ul className={`w-11/12 max-w-xl min-w-80 rounded-md bg-cyan-50 border-cyan-500 border-2 absolute top-16 ${prev ? 'hidden' : ''}`}>
          <li className='p-1 hover:bg-cyan-100 cursor-pointer'>Item 1</li>
          <li className='p-1 hover:bg-cyan-100 cursor-pointer'>Item 2</li>
          <li className='p-1 hover:bg-cyan-100 cursor-pointer'>Item 3</li>
        </ul>
      </div>
    </main>
  );
}
