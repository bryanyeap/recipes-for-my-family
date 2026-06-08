import Link from 'next/link'
import type { Recipe } from '@/lib/recipes'

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/[.08] bg-white transition-shadow hover:shadow-lg dark:border-white/[.145] dark:bg-zinc-900"
    >
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-orange-100 to-rose-100 text-6xl dark:from-zinc-800 dark:to-zinc-700">
        <span aria-hidden="true">{recipe.emoji}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/40 dark:text-orange-200">
          {recipe.category}
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 group-hover:underline dark:text-zinc-50">
          {recipe.title}
        </h3>
        <p className="flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {recipe.description}
        </p>
        <div className="flex items-center gap-4 pt-2 text-xs text-zinc-500 dark:text-zinc-500">
          <span>⏱ {recipe.prepTime} prep</span>
          <span>🔥 {recipe.cookTime} cook</span>
          <span>🍽 Serves {recipe.servings}</span>
        </div>
      </div>
    </Link>
  )
}
