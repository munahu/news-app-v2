import { Category, categories } from "./categories";
import Layout from "./components/Layout";
import Image from "next/image";

interface Article {
  source: { id: string; name: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface PreviewCategoryProps {
  category: Category;
}

async function fetchArticles(category: Category, amount: string) {
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

  return filteredArticles.slice(0, 3);
}

async function PreviewCategory({ category }: PreviewCategoryProps) {
  const articles = await fetchArticles(category, "10");

  return (
    <li>
      <span>{category}</span>
      {articles &&
        articles.map((article, index) => (
          <div key={index}>
            {index === 0 && article.urlToImage && (
              <Image
                src={article.urlToImage}
                alt={article.title}
                width={100}
                height={100}
              />
            )}
            <p>{article.title}</p>
          </div>
        ))}
    </li>
  );
}

export default async function Home() {
  return (
    <Layout heading="news">
      <>
        <ul>
          {categories.map((category, index) => (
            <PreviewCategory key={index} category={category} />
          ))}
        </ul>
        <h1>home</h1>
      </>
    </Layout>
  );
}
