import { Category, categories } from "../categories";
import Layout from "../components/Layout";
import { fetchArticles } from "../layout";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: Category } }) {
  if (categories.includes(params.slug)) {
    const articles = await fetchArticles(params.slug, "20");
    return (
      <Layout heading={params.slug}>
        <>
          <h1>{params.slug}</h1>
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  width={100}
                  height={100}
                />
                <p>{article.title}</p>
                <p>{article.description}</p>
                <p>{article.source.name}</p>
              </li>
            ))}
          </ul>
        </>
      </Layout>
    );
  } else {
    notFound();
  }
}
