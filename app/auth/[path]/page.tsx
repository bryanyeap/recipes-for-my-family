import { AuthView } from "@neondatabase/auth/react";

export const dynamicParams = false;

// Hardcoded rather than derived from authViewPaths: that import resolves to a
// function (not the path map) inside generateStaticParams under Turbopack's
// build worker, silently producing an empty list and 404ing every /auth/* route.
const STATIC_AUTH_PATHS = [
  "sign-in",
  "sign-out",
  "forgot-password",
  "reset-password",
  "magic-link",
  "email-otp",
  "two-factor",
  "callback",
  "recover-account",
  "accept-invitation",
];

export function generateStaticParams() {
  return STATIC_AUTH_PATHS.map((path) => ({ path }));
}

export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  return <AuthView path={path} />;
}
