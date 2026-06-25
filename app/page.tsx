import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import { getAllRecipes } from "@/lib/recipes";

export default function Home() {
  const recipes = getAllRecipes();

  return (
    <div className="flex flex-1 flex-col items-center">
      <section className="flex w-full flex-col items-center gap-6 px-6 py-20 text-center">
        <span className="text-5xl" aria-hidden="true">
          🍲
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Recipes worth passing down
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A small collection of the dishes that show up again and again at our
          table — from Sunday roasts to the cookies everyone asks for by name.
        </p>
        <Link
          href="/recipes"
          className="mt-2 flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-white! dark:text-black! transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Browse all recipes
        </Link>
      </section>

      <section className="w-full max-w-5xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Family favorites
          </h2>
          <Link
            href="/recipes"
            className="text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-400"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
