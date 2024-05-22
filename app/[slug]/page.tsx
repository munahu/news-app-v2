import { Category, categories } from "../categories";
import Layout from "../components/Layout";
import { fetchArticles } from "@/app/actions";
import { notFound } from "next/navigation";
import Article from "../components/Article";

export default async function Page({ params }: { params: { slug: Category } }) {
  const category = params.slug;
  if (categories.includes(category)) {
    const articles = await fetchArticles(category, "20");

    return (
      <Layout heading={category}>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {articles.map((article, index) => (
            <Article key={index} article={article} category={category} />
          ))}
        </ul>
      </Layout>
    );
  } else {
    notFound();
  }
}
