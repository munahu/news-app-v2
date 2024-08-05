"use client";

import Link from "next/link";
import { useState } from "react";
import { categoryNames } from "../categories";

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
          className="absolute right-8 lg:hidden w-7 h-7 cursor-pointer z-50"
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
          className="absolute right-8 lg:hidden w-7 h-7 cursor-pointer"
          onClick={() => setIsMobileNavDisplayed(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      )}
      <Link className="font-semibold text-2xl" href={`/${heading}`}>
        {heading === "home" ? "news" : heading}
      </Link>
      {isMobileNavDisplayed && <MobileNav heading={heading} />}
      <ul className="hidden lg:flex">
        <li>
          <Link
            href="/"
            className="p-2 ml-4 text-sm opacity-90 font-light uppercase cursor-pointer"
          >
            Home
          </Link>
        </li>
        {categoryNames.map((categoryName, index) => (
          <li key={index}>
            <Link
              href={`/${categoryName}`}
              className="p-2 ml-4 text-sm opacity-90 font-light uppercase cursor-pointer"
            >
              {categoryName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNav({ heading }: MobileNavProps) {
  return (
    <ul className="flex lg:hidden flex-col absolute bg-neutral-900 inset-0 pt-20 pl-14 md:pl-20 tracking-tighter z-40">
      {heading !== "news" && (
        <li>
          <Link
            href="/"
            className="text-2xl uppercase py-4 flex items-center hover:line-through"
          >
            home
          </Link>
        </li>
      )}
      {categoryNames.map((categoryName, index) => (
        <li key={index}>
          <Link
            href={`/${categoryName}`}
            className="text-2xl uppercase py-4 flex items-center hover:line-through"
          >
            {categoryName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
