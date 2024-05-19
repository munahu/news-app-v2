import { Category, categories } from "../categories";
import Layout from "../components/Layout";
import { fetchArticles } from "@/app/actions";
import { notFound } from "next/navigation";
import Article from "../components/Article";

export default async function Page({ params }: { params: { slug: Category } }) {
  if (categories.includes(params.slug)) {
    const articles = await fetchArticles(params.slug, "20");
    const firstThree = [...articles.slice(0, 3)];
    const rest = [...articles.slice(3)];
    return (
      <Layout heading={params.slug}>
        <>
          <ul className="grid grid-cols-1 md:grid-cols-3 mb-24 border-b border-dotted border-neutral-400">
            <Article article={firstThree[0]} isTopArticle isTopSectionArticle />
            <div className="flex flex-col">
              <Article article={firstThree[1]} isTopSectionArticle />
              <Article article={firstThree[2]} isTopSectionArticle />
            </div>
          </ul>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-x-7 gap-y-20">
            {rest.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </ul>
        </>
      </Layout>
    );
  } else {
    notFound();
  }
}
