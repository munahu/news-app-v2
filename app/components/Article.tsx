"use client";

import Image from "next/image";
import { ArticleStructure } from "@/app/actions";
import { useRouter } from "next/navigation";
import { Category } from "../categories";

interface Props {
  article: ArticleStructure;
  category: Category;
}

export default function Article({ article, category }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const storedViewedArticles = localStorage.getItem("articles");
    if (storedViewedArticles) {
      const articlesViewed = JSON.parse(storedViewedArticles);
      articlesViewed.push(article);
      localStorage.setItem("articles", JSON.stringify(articlesViewed));
    } else {
      localStorage.setItem("articles", JSON.stringify([article]));
    }
    router.push(`/${category}/${article.id}`);
  };
  return (
    <li className="group cursor-pointer" onClick={() => handleClick()}>
      <Image
        alt={article.title}
        src={article.urlToImage}
        width={1200}
        height={550}
        className="h-full object-cover brightness-50 group-hover:brightness-100"
      />
    </li>
  );
}
