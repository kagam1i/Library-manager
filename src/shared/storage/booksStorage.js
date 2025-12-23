// Этоn "ключ" типо название ячейки в LocalStorage
export const STORAGE_KEY = 'books-manager-books';

// Функция для чтения книг из LocalStorage, которая возвращает массив книг
export const loadBooks = () => {
  try {
    // читаем строку из LocalStorage по ключу STORAGE_KEY
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return []; // если данных нет, возвращаем пустой массив
    }   
    // преобразуем строку обратно в массив
    const parsed = JSON.parse(raw)

    // проверяем, что это массив на всякий случай
    if (!Array.isArray(parsed)) return [];

    return parsed;
  }
    catch (error) {   
    // если JSON сломан или LocalStorage не доступен, выводим ошибку и возвращаем пустой массив
    console.error("Ошибка при загрузке книг из LocalStorage:", error);
    return []; 
  } 
};

// Функция для сохранения массива книг в LocalStorage
export const saveBooks = (books) => {
  try {
    // преобразуем массив в строку
    const raw = JSON.stringify(books); 
    // сохраняем строку в LocalStorage
    localStorage.setItem(STORAGE_KEY, raw); 
  } 
  catch (err) {
    console.error("Ошибка при сохранении книг в LocalStorage:", err);
  }
};