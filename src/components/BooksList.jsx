import { useState } from "react";
import { BookCard } from "./BookCard";
import { BookModal } from "./BookModal";
import { EmptyState } from "./EmptyState";

export const BooksList = ({ books = [], allBooks = [], onRemoveBook }) => {
  // здесь хранится книга, которую мы открыли в модалке
  const [selectedBook, setSelectedBook] = useState(null);

  const hasBooksInLibrary = allBooks.length > 0;

  // удаление книги:
  // просим "внешний уровень" (страницу Library) удалить книгу 
  const handleDelete = (id) => {
    onRemoveBook?.(id);
    setSelectedBook(null);
  };

  // если нечего показывать — показываем EmptyState
  if (books.length === 0) {
    return <EmptyState hasBooksInLibrary={hasBooksInLibrary} />;
  }

  return (
    <>
      {/* grid карточек */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-6
          justify-items-center
        "
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            // когда нажимаем View details, открывается модалка
            onOpen={() => setSelectedBook(book)}
          />
        ))}
      </div>

      {/* модалка */}
      <BookModal
        book={selectedBook}
        // закрыть модалку
        onClose={() => setSelectedBook(null)}
        // удалить книгу и закрыть модалку
        onRemoveBook={handleDelete}
      />
    </>
  );
};
