import { Category, categories } from "./categories";
import Layout from "./components/Layout";
import Image from "next/image";
import { fetchArticles } from "./layout";

interface PreviewCategoryProps {
  category: Category;
}

async function PreviewCategory({ category }: PreviewCategoryProps) {
  const articles = (await fetchArticles(category, "10")).slice(0, 3);
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
