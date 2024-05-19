import { Category, categories } from "./categories";
import Link from "next/link";
import Image from "next/image";
import { fetchArticles } from "@/app/actions";

interface PreviewCategoryProps {
  category: Category;
}

async function PreviewCategory({ category }: PreviewCategoryProps) {
  const articles = (await fetchArticles(category, "10")).slice(0, 1);

  return (
    <li className="relative cursor-pointer group">
      {articles &&
        articles.map((article, index) => (
          <Link key={index} href={`/${category}`} className="relative">
            {index === 0 && (
              <>
                <span className="absolute left-2 bottom-6 text-white text-5xl md:text-6xl lg:text-7xl capitalize font-semibold -tracking-[0.04em] font-sans z-40 opacity-65 group-hover:opacity-100">
                  {category}
                </span>

                <Image
                  alt={article.title}
                  src={article.urlToImage}
                  width={1200}
                  height={8250}
                  className="h-full object-cover brightness-50 tracking-wider"
                  priority
                />
              </>
            )}
          </Link>
        ))}
    </li>
  );
}

export default async function Home() {
  return (
    <ul className="h-screen relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {categories.map((category, index) => (
        <PreviewCategory key={index} category={category} />
      ))}
    </ul>
  );
}
