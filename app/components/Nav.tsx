"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "../categories";

interface Props {
  heading: string;
}

interface MobileNavProps {
  heading: string;
}

export default function Nav({ heading }: Props) {
  const [isMobileNavDisplayed, setIsMobileNavDisplayed] = useState(false);

  return (
    <nav className="fixed md:static top-0 left-0 right-0 pt-8 pb-3 sm:pb-2 bg-white border-b border-black flex sm:flex-col justify-center items-center z-50">
      {isMobileNavDisplayed ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-8 sm:hidden w-7 h-7 cursor-pointer"
          onClick={() => setIsMobileNavDisplayed(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-8 sm:hidden w-7 h-7 cursor-pointer"
          onClick={() => setIsMobileNavDisplayed(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      )}
      <h1 className="mb-0 sm:mb-6 text-3xl sm:text-4xl font-black uppercase">
        {heading === "home" ? "news" : heading}
      </h1>
      {isMobileNavDisplayed && <MobileNav heading={heading} />}
      <ul className="hidden sm:flex">
        <li>
          <Link
            href="/"
            className="p-2 ml-4 text-sm opacity-90 font-medium uppercase cursor-pointer"
          >
            Home
          </Link>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={category}
              className="p-2 ml-4 text-sm opacity-90 font-medium uppercase cursor-pointer"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNav({ heading }: MobileNavProps) {
  return (
    <ul className="pb-8 bg-white top-20 left-0 right-0 fixed flex flex-col sm:hidden">
      {heading !== "news" && (
        <li>
          <Link
            href="/"
            className="block pl-8 py-3 text-lg opacity-90 font-bold uppercase border-b border-neutral-300"
          >
            Home
          </Link>
        </li>
      )}
      {categories.map(
        (category, index) =>
          heading !== category && (
            <li key={index}>
              <Link
                href={category}
                className="block pl-8 py-3 text-lg opacity-90 font-bold uppercase border-b border-neutral-300"
              >
                {category}
              </Link>
            </li>
          )
      )}
    </ul>
  );
}
