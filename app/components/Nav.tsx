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
    <nav className="font-sans flex justify-between items-center pt-6">
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
      <h1 className="font-semibold text-2xl">
        {heading === "home" ? "news" : heading}
      </h1>
      {isMobileNavDisplayed && <MobileNav heading={heading} />}
      <ul className="hidden sm:flex">
        <li>
          <Link
            href="/"
            className="p-2 ml-4 text-sm opacity-90 font-light uppercase cursor-pointer"
          >
            Home
          </Link>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={category}
              className="p-2 ml-4 text-sm opacity-90 font-light uppercase cursor-pointer"
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
