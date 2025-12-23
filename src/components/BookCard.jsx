export const BookCard = ({ book, onOpen }) => {
  return (
    <div className="card-archive p-4 flex flex-col gap-4 max-w-[260px] mx-auto">
      {/* обложка */}
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
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

        {/* лёгкое затемнение поверх картинки */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* текст */}
      <div className="text-center px-1">
        <h3 className="font-heading text-lg text-bm-text leading-tight">
          {book.title}
        </h3>

        <p className="text-sm text-bm-text/65 mt-1">
          {book.author}
        </p>
      </div>

      {/* кнопка */}
      <button
        onClick={onOpen}
        className="mt-auto px-4 py-2 rounded-full
                   border border-white/15
                   text-sm text-bm-text/80
                   bg-black/20
                   transition
                   hover:bg-black/30
                   active:scale-95"
      >
        View details
      </button>
    </div>
  );
};
