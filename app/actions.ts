import { unstable_noStore as noStore } from "next/cache";
import { Category } from "./categories";
import { v4 as uuidv4 } from "uuid";

export interface ArticleStructure {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export async function fetchArticles(category: Category, amount: string) {
  const actualCategoryName =
    category === "tech"
      ? "technology"
      : category === "culture"
      ? "entertainment"
      : category;

  noStore();
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${actualCategoryName}&apiKey=${process.env.NEWS_API_KEY}&pageSize=${amount}`
  );

  const data = await res.json();

  const articles: ArticleStructure[] = data.articles;

  articles.map((article) => (article.id = uuidv4()));

  const filteredArticles = articles.filter(
    (article) =>
      article.title && article.description && article.url && article.urlToImage
  );

  return filteredArticles;
}
