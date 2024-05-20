import { Category, categories } from "../categories";
import Layout from "../components/Layout";
import { fetchArticles } from "@/app/actions";
import { notFound } from "next/navigation";
import Article from "../components/Article";

export default async function Page({ params }: { params: { slug: Category } }) {
  if (categories.includes(params.slug)) {
    const articles = await fetchArticles(params.slug, "20");
    return (
      <Layout heading={params.slug}>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </ul>
      </Layout>
    );
  } else {
    notFound();
  }
}
