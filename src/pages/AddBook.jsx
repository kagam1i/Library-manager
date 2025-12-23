import React from "react";
import { BookForm } from "../components/BookForm";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";

export const AddBook = ({ onAddBook }) => {

  // функция для обработки добавления книги из формы
  const dispatch = useDispatch();

  // функция для добавления книги
  const handleAddBook = (bookData) => {
    dispatch(addBook(bookData)); // отправляем action в Redux для добавления книги
  };


  return (
    <main className="min-h-[70vh]">
      {/* секция с фоном */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/addBook_background.jpg')" }}
      >
        {/* затемняем фон, чтобы текст был читаемым */}
        <div className="absolute inset-0 bg-black/55" />

        {/* небольшой градиент внизу” */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-black/75" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
          <div className="mb-8">
            <p className="text-bm-accent-2/90 tracking-[0.22em] uppercase text-xs mb-2">
              Archive entry
            </p>

            <h1 className="font-heading text-4xl md:text-5xl text-bm-text">
              Add a book
            </h1>

            <p className="mt-3 text-bm-text/75 max-w-2xl">
              Fill in the details — the archive will remember it for your Library.
            </p>
          </div>

          {/* передача onAddBook в форму, чтобы она могла добавить книгу */}
          <BookForm onAddBook={handleAddBook} />
        </div>
      </section>
    </main>
  );
};
