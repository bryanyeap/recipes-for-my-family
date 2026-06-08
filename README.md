# Family Recipes

A personal recipe site for the family — built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

- `app/` — Next.js App Router pages (home, recipe listing, recipe detail)
- `components/` — Shared UI components (`RecipeCard`, `SiteHeader`)
- `lib/recipes.ts` — Recipe data and lookup functions
- `.claude/commands/new-recipe.md` — `/new-recipe` slash command for adding recipes

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
