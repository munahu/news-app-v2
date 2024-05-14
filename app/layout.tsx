import type { Metadata } from "next";
import "./globals.css";
import { Category } from "./categories";
import localFont from "next/font/local";

export interface ArticleStructure {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export const metadata: Metadata = {
  title: "MH News",
  description: "Get the latest news.",
};

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export async function fetchArticles(category: Category, amount: string) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}&pageSize=${amount}`
  );

  const data = await res.json();

  const articles: ArticleStructure[] = data.articles;

  const filteredArticles = articles.filter(
    (article) =>
      article.title && article.description && article.url && article.urlToImage
  );

  return filteredArticles;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} flex justify-center`}>
        {children}
      </body>
    </html>
  );
}
