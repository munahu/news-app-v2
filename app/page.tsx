import { Category, categories } from "./categories";
import Layout from "./components/Layout";
import Link from "next/link";
import Image from "next/image";
import { fetchArticles } from "@/app/layout";

interface PreviewCategoryProps {
  category: Category;
}

async function PreviewCategory({ category }: PreviewCategoryProps) {
  const articles = (await fetchArticles(category, "10")).slice(0, 3);
  return (
    <li className="relative cursor-pointer">
      <Link
        href={`/${category}`}
        className="absolute -top-6 left-0 bg-black text-white text-sm px-3 py-2 font-light capitalize"
      >
        {category}
      </Link>
      {articles &&
        articles.map((article, index) => (
          <div key={index} className="py-3 border-b border-black">
            {index === 0 && (
              <a key={index} href={article.url} target="_blank">
                <Image
                  alt={article.title}
                  src={article.urlToImage}
                  width={1200}
                  height={1150}
                  className="max-w-full h-auto max-h-[384px] md:max-h-[163px] object-cover mb-5"
                />
              </a>
            )}
            <a
              key={index}
              href={article.url}
              target="_blank"
              className="font-bold"
            >
              {article.title}
            </a>
          </div>
        ))}
    </li>
  );
}

export default async function Home() {
  return (
    <Layout heading="news">
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-20">
        {categories.map((category, index) => (
          <PreviewCategory key={index} category={category} />
        ))}
      </ul>
    </Layout>
  );
}
