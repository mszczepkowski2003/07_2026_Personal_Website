import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-heading text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-md text-base font-extralight leading-relaxed text-ink-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-accent/50 hover:text-accent"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        Back home
      </Link>
    </div>
  );
}
