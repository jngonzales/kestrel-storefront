import { Link } from "~/components/link";

export function Logo() {
  return (
    <Link
      to="/"
      prefetch="intent"
      className="z-30 flex h-full w-fit items-center gap-2 lg:h-fit"
    >
      <svg viewBox="0 0 32 32" className="size-6 shrink-0" aria-hidden="true">
        <path
          d="M16 3.2 28.8 16 16 28.8 3.2 16Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M16 10.9 21.1 16 16 21.1 10.9 16Z" fill="#c24e2a" />
      </svg>
      <span className="font-serif text-2xl leading-none font-semibold tracking-tight">
        Kestrel
      </span>
    </Link>
  );
}
