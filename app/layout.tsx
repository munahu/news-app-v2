import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Category } from "./categories";

interface Article {
  source: { id: string; name: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MH News",
  description: "Get the latest news.",
};

export async function fetchArticles(category: Category, amount: string) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}&pageSize=${amount}`
  );

  const data = await res.json();

  const articles: Article[] = data.articles;

  const filteredArticles = articles.filter(
    (article) =>
      article.title &&
      article.source.name &&
      article.description &&
      article.url &&
      article.urlToImage
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
      <body className={`${inter.className} flex justify-center`}>
        {children}
      </body>
    </html>
  );
}
