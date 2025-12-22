export const EmptyState = ({ hasBooksInLibrary }) => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="card-archive p-8 text-center">
        <p className="italic text-bm-text/80 mb-2">
          {hasBooksInLibrary
            ? "No books for this filter."
            : "The shelves are still empty."}
        </p>

        <p className="text-sm text-bm-text/60">
          {hasBooksInLibrary
            ? "Try another genre or add a new book."
            : "Add your first book and begin building your personal archive."}
        </p>
      </div>
    </div>
  );
};
