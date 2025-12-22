import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const QUOTES = [
  "Some doors open only to those who keep a book close.",
  "A quiet archive remembers what the world forgets.",
  "Every shelf is a map — every page, a path.",
  "The library grows when you return with a story.",
  "Your secret library, always at hand.",
];

export const Footer = () => {
  const year = new Date().getFullYear();

  const quote = useMemo(() => {
    const dayKey = new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < dayKey.length; i++) {
      hash = (hash * 31 + dayKey.charCodeAt(i)) >>> 0;
    }
    return QUOTES[hash % QUOTES.length];
  }, []);

  return (
    <footer className="border-t border-white/10 bg-black/25">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Верхняя часть — расширяем высоту */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Левая колонка */}
          <div>
            <div className="flex items-center gap-3">
              <span className="book-icon" aria-hidden="true" />
              <span className="font-heading text-xl tracking-wide text-bm-text">
                LibraManage
              </span>
            </div>

            <p className="mt-4 text-sm text-bm-text/70 leading-relaxed">
              A quiet digital library where every book you add
              finds its place on the shelf — instantly and forever.
            </p>
          </div>

          {/* Центр — цитата */}
          <div className="flex items-center">
            <p className="text-bm-text/70 text-sm italic text-center leading-relaxed">
              “{quote}”
            </p>
          </div>

          {/* Правая колонка — навигация */}
          <div className="flex flex-col gap-2 text-sm md:items-end">
            <Link className="text-bm-text/70 hover:text-bm-text transition" to="/">
              Home
            </Link>
            <Link className="text-bm-text/70 hover:text-bm-text transition" to="/signIn">
              Sign in
            </Link>
            <Link className="text-bm-accent hover:text-bm-accent-2 transition" to="/signUp">
              Enter the library
            </Link>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span className="text-xs text-bm-text/50">
            © {year} LibraManage
          </span>

          <span className="text-xs text-bm-text/50 italic">
            Crafted in the spirit of dark academia
          </span>
        </div>
      </div>
    </footer>
  );
};
