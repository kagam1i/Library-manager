export const BookModal = ({ book, onClose, onRemoveBook }) => {
  // если книга не выбрана — модалку не показываем
  if (!book) return null;

  // удаление книги из библиотеки
  const handleDelete = () => {
    const ok = window.confirm("Delete this book from your library?");
    if (!ok) return;

    onRemoveBook?.(book.id);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* окно модалки */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="card-archive w-full max-w-3xl p-5 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
          {/* кнопки */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={handleDelete}
              className="px-3 py-1.5 rounded-full text-xs
                         border border-white/20 bg-black/30 text-bm-text/80
                         hover:bg-black/40 transition"
            >
              Delete
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/20
                         text-bm-text/70 bg-black/30 hover:bg-black/40 transition"
            >
              ✕
            </button>
          </div>

          <h2 className="font-heading text-xl sm:text-2xl text-bm-text mb-6 text-center">
            Book card
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
            {/* обложка */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 max-w-[240px] mx-auto">
              {book.cover ? (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-sm text-bm-text/40">
                  No cover
                </div>
              )}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* текст */}
            <div className="flex flex-col gap-3 text-bm-text/85 text-sm sm:text-base">
              <p>
                <span className="text-bm-text/60">Title:</span> {book.title}
              </p>
              <p>
                <span className="text-bm-text/60">Author:</span> {book.author}
              </p>

              {book.genre && (
                <p>
                  <span className="text-bm-text/60">Genre:</span> {book.genre}
                </p>
              )}

              {book.publishedAt && (
                <p>
                  <span className="text-bm-text/60">Published:</span>{" "}
                  {book.publishedAt}
                </p>
              )}

              <div className="mt-3">
                <p className="text-sm text-bm-text/70 leading-relaxed">
                  {book.description || "No description provided."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
