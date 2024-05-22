"use client";

import { ArticleStructure } from "@/app/actions";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import { notFound } from "next/navigation";

interface MobileTextLayoutProps {
  title: string;
  urlToImage: string;
  description: string;
}

export default function Page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const storedArticle = localStorage.getItem("article");
  const article: ArticleStructure = storedArticle && JSON.parse(storedArticle);

  if (article.id === params.id) {
    return (
      <Layout heading={params.slug}>
        <div className="relative h-screen">
          <MobileTextLayout
            title={article.title}
            description={article.description}
            urlToImage={article.urlToImage}
          />
          <div className="hidden md:flex mt-16 absolute z-10">
            <div className="w-2/3 mr-12 lg:w-1/2">
              <h2 className="text-4xl mb-6 font-semibold -tracking-[1.5px]">
                {article.title}
              </h2>
              <p className="text-xl font-light -tracking-[0.3px]">
                {article.description}
              </p>
            </div>
            <Image
              alt={article.title}
              src={article.urlToImage}
              width={1200}
              height={550}
              className="object-cover w-1/3 lg:w-1/2"
            />
          </div>
          <Image
            alt={article.title}
            src={article.urlToImage}
            width={1200}
            height={550}
            className="h-2/3 object-cover blur-[100px] brightness-50 border border-white"
          />
        </div>
      </Layout>
    );
  } else {
    notFound();
  }
}

function MobileTextLayout({
  title,
  urlToImage,
  description,
}: MobileTextLayoutProps) {
  return (
    <div className="md:hidden absolute mt-8 z-20">
      <h2 className="text-4xl font-semibold -tracking-[1.5px] mb-8">{title}</h2>
      <Image
        alt={title}
        src={urlToImage}
        width={1200}
        height={550}
        className="object-cover mb-6"
      />
      <p className="text-lg font-light -tracking-[0.3px]">{description}</p>
    </div>
  );
}
