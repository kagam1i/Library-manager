import { useState, useEffect } from "react";
import { BooksList } from "../components/BooksList";

export const Library = ({ books = [], onRemoveBook }) => {
  //выбранный жанр
  const [selectedGenre, setSelectedGenre] = useState("All");

  // сбор уникальных жанров из books
  const uniqueGenres = new Set();

  for (const book of books) {
    uniqueGenres.add(book.genre.trim());
  }

  // создание итогового списка жанров для кнопок
  const genres = ["All", ...uniqueGenres];


  // если выбранный жанр пропал,
  // автоматически возвращаемся на "All"
  useEffect(() => {
    // если выбран All — ничего делать не надо
    if (selectedGenre === "All") return;

    // если выбранного жанра больше нет в genres — сбрасываем фильтр
    const stillExists = genres.includes(selectedGenre);
    if (!stillExists) {
      setSelectedGenre("All");
    }
  }, [books, selectedGenre]); // отслеживание books (удаление/добавление) и выбранного жанра


  //фильтруем книги по выбранному жанру
  let filteredBooks = books;

  // если выбран не "All" — оставляем только книги нужного жанра
  if (selectedGenre !== "All") {
    filteredBooks = books.filter((book) => book.genre.trim() === selectedGenre);
  }

  return (
    <main className="min-h-[70vh]">
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/library_background.jpg')" }}
      >
        {/* затемнение фона */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/75" />

        <div className="relative z-10 min-h-[70vh]">
          <div className="max-w-6xl mx-auto px-6 py-10">
            {/* заголовок */}
            <div className="mb-10 text-center">
              <p className="text-bm-accent-2/90 tracking-[0.22em] uppercase text-xs mb-2">
                Personal archive
              </p>

              <h1 className="font-heading text-4xl md:text-5xl text-bm-text">
                Library
              </h1>

              <p className="mt-3 text-bm-text/75 max-w-2xl mx-auto">
                A quiet place where every book you add finds its shelf.
              </p>
            </div>

            {/* фильтр по жанру) */}
            <div className="mb-8">
              <p className="text-bm-accent-2/90 tracking-[0.22em] uppercase text-xs mb-3 text-center">
                Filter by genre
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {genres.map((genre) => {
                  const isActive = genre === selectedGenre;

                  return (
                    <button
                      key={genre}
                      type="button"
                      onClick={() => setSelectedGenre(genre)}
                      className={
                        isActive
                          ? "px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.22em] border transition border-bm-accent/40 bg-bm-accent/15 text-bm-accent"
                          : "px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.22em] border transition border-white/15 bg-black/30 text-bm-text/75 hover:bg-black/40"
                      }
                    >
                      {genre}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* список книг */}
            <BooksList
              books={filteredBooks} // отфильтрованные книги 
              allBooks={books} // проверка - библиотека пустая или пустой результат фильтра
              onRemoveBook={onRemoveBook}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
