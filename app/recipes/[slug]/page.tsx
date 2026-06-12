import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllRecipes, getRecipeBySlug } from "@/lib/recipes";

export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe not found | Family Recipes" };
  }

  return {
    title: `${recipe.title} | Family Recipes`,
    description: recipe.description,
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link
        href="/recipes"
        className="text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-400"
      >
        ← Back to all recipes
      </Link>

      <div className="mt-6 flex flex-col gap-4">
        <span className="w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/40 dark:text-orange-200">
          {recipe.category}
        </span>
        <h1 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          <span aria-hidden="true">{recipe.emoji}</span>
          {recipe.title}
        </h1>
        <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          {recipe.description}
        </p>

        <dl className="mt-2 grid grid-cols-1 gap-4 rounded-2xl border border-black/[.08] bg-white p-5 text-sm sm:grid-cols-3 dark:border-white/[.145] dark:bg-zinc-900">
          <div>
            <dt className="text-zinc-500 dark:text-zinc-500">Prep time</dt>
            <dd className="font-medium text-zinc-900 dark:text-zinc-50">{recipe.prepTime}</dd>
          </div>
          <div>
            <dt className="text-zinc-500 dark:text-zinc-500">Cook time</dt>
            <dd className="font-medium text-zinc-900 dark:text-zinc-50">{recipe.cookTime}</dd>
          </div>
          <div>
            <dt className="text-zinc-500 dark:text-zinc-500">Servings</dt>
            <dd className="font-medium text-zinc-900 dark:text-zinc-50">{recipe.servings}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-[1fr_2fr]">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Ingredients
          </h2>
          <ul className="flex flex-col gap-2 text-zinc-700 dark:text-zinc-300">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500">
                  •
                </span>
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Instructions
          </h2>
          <ol className="flex flex-col gap-5 text-zinc-700 dark:text-zinc-300">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-800 dark:bg-orange-900/40 dark:text-orange-200"
                >
                  {index + 1}
                </span>
                <p className="leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
