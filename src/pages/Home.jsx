import React from "react";

export const Home = () => {
  return (
    <main>
      <section
        className="relative h-[80vh] min-h-[520px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        {/* Overlays для читаемости */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60" />
        <div className="absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.65)]" />

        {/* Мягкий переход в футер */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black/25" />

        {/* Контент */}
        <div className="relative z-10 h-full">
          <div className="max-w-6xl mx-auto h-full px-6">
            <div className="h-full grid items-center">
              <div className="max-w-2xl text-left">
                <p className="text-bm-accent-2/90 tracking-[0.22em] uppercase text-xs mb-4">
                  A private place for books
                </p>

                <h1 className="font-heading text-5xl leading-[1.05] md:text-6xl text-bm-text drop-shadow">
                  Your secret library,
                  <br />
                  always at hand.
                </h1>

                <p className="mt-5 text-bm-text/85 text-lg leading-relaxed md:text-xl font-body">
                  Add books to your collection and watch them appear in your Library —
                  a quiet archive created just for you.
                </p>

                <div className="mt-8">
                  <a
                    href="/signUp"
                    className="
                      inline-flex items-center justify-center
                      px-6 py-2.5 rounded-full
                      bg-bm-accent text-bm-bg
                      font-semibold tracking-wide
                      transition-all duration-200
                      hover:brightness-110
                      active:scale-95
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-bm-accent/60
                    "
                  >
                    Enter the library
                  </a>
                </div>

                <p className="mt-6 text-sm text-bm-text/60 italic">
                  Available for registered readers only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
