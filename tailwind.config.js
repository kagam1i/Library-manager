/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      /**
       * Typography
       * font-heading — для заголовков
       * font-body — для основного текста
       */
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Source Serif 4"', "serif"],
      },

      /**
       * Dark Academia palette (токены проекта)
       * bm-bg / bm-surface* — фоны
       * bm-text / bm-muted — текст
       * bm-accent* — акцент (кнопки/активные состояния)
       */
      colors: {
        "bm-bg": "#0B0F0D", // основной фон (почти чёрный с зелёным оттенком)
        "bm-surface": "#121814", // поверхность (шапка/панели/карточки)
        "bm-surface-2": "#182019", // чуть светлее (альтернативная поверхность)
        "bm-border": "rgba(255,255,255,0.08)", // общий тонкий бордер

        "bm-text": "#E8E1D6", // основной текст (пергамент)
        "bm-muted": "#B8B0A4", // приглушённый текст

        "bm-accent": "#2B8048", // главный акцент
        "bm-accent-2": "#76B27E", // мягкий акцент (hover/secondary)
      },

      /**
       * Shadows
       * soft — мягкая тень под карточки/панели
       */
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },

  plugins: [],
};
