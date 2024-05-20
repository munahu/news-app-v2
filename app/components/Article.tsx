"use client";

import Image from "next/image";
import { ArticleStructure } from "@/app/actions";

interface Props {
  article: ArticleStructure;
}

export default function Article({
  article: { urlToImage, url, title },
}: Props) {
  return (
    <li
      className="group cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      <Image
        alt={title}
        src={urlToImage}
        width={1200}
        height={550}
        className="h-full object-cover brightness-50 group-hover:brightness-100"
      />
      <div className="hidden">
        <p className="text-xl md:text-[19px] leading-7 font-bold my-3">
          {title}
        </p>
      </div>
    </li>
  );
}
