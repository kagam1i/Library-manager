// src/shared/utils/fileToCoverDataUrl.js

// Превращает файл картинки в "лёгкий" dataURL (base64), уменьшая размер.
// maxW — максимальная ширина, quality — качество JPEG (0..1).
export async function fileToCompressedDataUrl(file, maxW = 360, quality = 0.82) {
  if (!file) throw new Error("Файл не выбран");

  // Загружаем картинку
  const img = await loadImage(URL.createObjectURL(file));

  // Считаем новый размер (не увеличиваем, только уменьшаем)
  const scale = Math.min(1, maxW / img.width);
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));

  // Рисуем в canvas
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, w, h);

  // JPEG обычно в разы меньше, чем PNG/base64
  const dataUrl = canvas.toDataURL("image/jpeg", quality);

  // освобождаем url
  URL.revokeObjectURL(img.src);

  return dataUrl;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
