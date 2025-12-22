// вспомогательный компонент - обертка для одинакового стиля label + input
export function Field({ label, error, children }) {
  const hasError = Boolean(error);

  return (
    <label className="block">
      <span className="block mb-2 text-sm text-bm-text/85">{label}</span>

      {children}

      {/* error placeholder с анимацией */}
      <p
        className={[
          "mt-2 text-xs text-red-400/90",
          "transition-all duration-200 ease-out",
          "overflow-hidden",
          hasError ? "opacity-100 translate-y-0 max-h-20" : "opacity-0 -translate-y-1 max-h-0",
        ].join(" ")}
        aria-live="polite"
      >
        {error || " "} {/* пробел, чтобы элемент не был совсем пустым */}
      </p>
    </label>
  );
}