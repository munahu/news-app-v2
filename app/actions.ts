import { unstable_noStore as noStore } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { categories, CategoryName } from "./categories";

export interface ArticleStructure {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export async function fetchArticles(
  categoryName: CategoryName,
  amount: string
) {
  const categoryDomains = categories.find(
    (category) => category.name === categoryName
  )?.domains;

  const response = await fetch(
    `https://newsapi.org/v2/everything?domains=${categoryDomains}&language=en&apiKey=${process.env.NEWS_API_KEY}&pageSize=${amount}`
  );

  const data = await response.json();

  noStore();

  const articles: ArticleStructure[] = data.articles;

  articles.map((article) => (article.id = uuidv4()));

  const filteredArticles = articles.filter(
    (article) =>
      article.title && article.description && article.url && article.urlToImage
  );

  return filteredArticles;
}
