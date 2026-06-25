import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@neondatabase/auth/react'
import ThemeToggle from './ThemeToggle'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/[.08] bg-white/80 backdrop-blur-sm dark:border-white/[.145] dark:bg-black/80">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          <span aria-hidden="true">🍲</span>
          Family Recipes
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
            Home
          </Link>
          <Link href="/recipes" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
            Recipes
          </Link>
          <ThemeToggle />
          <SignedOut>
            <Link href="/auth/sign-in" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}
