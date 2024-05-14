"use client";

import Image from "next/image";
import { ArticleStructure } from "../layout";

interface Props {
  isTopArticle?: boolean;
  isTopSectionArticle?: boolean;
  article: ArticleStructure;
}

function TopSectionArticle({
  article: { urlToImage, url, title, description },
  isTopArticle,
}: Props) {
  return (
    <li
      className={`${
        isTopArticle
          ? `pr-0 md:pr-8 md:col-span-2 border-none md:border-dotted border-r border-neutral-400`
          : `ml-0 md:ml-8 `
      } mb-12 cursor-pointer`}
      onClick={() => window.open(url, "_blank")}
    >
      <Image
        alt={title}
        src={urlToImage}
        width={1200}
        height={550}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="">
        <p
          className={`${
            isTopArticle
              ? `text-3xl md:text-4xl font-black uppercase mt-6`
              : `text-xl font-bold leading-7 mt-3`
          } mb-3`}
        >
          {title}
        </p>
        {isTopArticle && (
          <p className="text-lg md:text-xl opacity-75">{description}</p>
        )}
      </div>
    </li>
  );
}

export default function Article({
  article: { urlToImage, url, title, description },
  isTopSectionArticle,
  isTopArticle,
}: Props) {
  return (
    <>
      {isTopSectionArticle ? (
        <TopSectionArticle
          article={{ urlToImage, url, title, description }}
          isTopArticle={isTopArticle}
        />
      ) : (
        <li className="mb-12 cursor-pointer">
          <Image
            alt={title}
            src={urlToImage}
            width={1200}
            height={550}
            className="max-w-full h-auto max-h-[384px] md:max-h-[163px] object-cover"
          />
          <div>
            <p className="text-xl md:text-[19px] leading-7 font-bold my-3">
              {title}
            </p>
            <p className="text-md md:text-[15px] leading-6 mt-2">
              {description}
            </p>
          </div>
        </li>
      )}
    </>
  );
}
