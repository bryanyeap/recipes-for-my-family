import type { Metadata } from "next";
import RecipeCard from "@/components/RecipeCard";
import { getAllRecipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Recipes | Family Recipes",
  description: "Browse our collection of family recipes.",
};

export default function RecipesPage() {
  const recipes = getAllRecipes();

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          All recipes
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {recipes.length} recipes and counting — pick one and get cooking.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
