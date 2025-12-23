import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadBooks } from "../shared/storage/booksStorage";


// Теория по createSlice: 
// Redux хранит данные в одном месте.
// Мы создаём "slice" = кусок общего состояния.
// Здесь будет всё, что относится к книгам. 

// Начальное состояние полки "books"
const initialState = {
    // При запуске приложения мы читаем localStorage
    // и сразу кладем книги в Redux в качестве стартового состояния
    items: loadBooks(),
}

// booksSlice.js в данном проекте - полка “books” в общем хранилище Redux
const booksSlice = createSlice({
    name: 'books', // Имя слайса
    initialState, // Начальное состояние    
    reducers: {
        // action - "добавь книгу в Redux"
        addBook: {
            reducer(state, action) {
                state.items.unshift(action.payload); // добавляем книгу в начало массива
            },
            // prepare - функция для подготовки данных перед отправкой в reducer
            prepare(book) {
                return {
                    payload: {
                        id: nanoid(), // генерируем уникальный id для книги
                        ...book,
                    }
                }
            }
        },
        // action - "удали книгу из Redux по id"
        removeBook(state, action) {
            const idToRemove = action.payload;
            state.items = state.items.filter((book) => book.id !== idToRemove);
        }
    }
});

// Экспортируем action-ы
export const { addBook, removeBook } = booksSlice.actions;

// reducer — это “движок” slice-а.
// Store будет знать: "состояние books обслуживает вот этот reducer".
export default booksSlice.reducer;

// selector — аккуратный способ читать книги из store.
// Пока не используется, но уже заготовим.
export const selectBooks = (state) => state.books.items;




// Обобщение:
// createSlice создаёт “секцию” в общем состоянии приложения
// initialState — что лежит в этой секции изначально
// reducers — список “команд”, которые могут менять эту секцию
// selectBooks — удобная функция “достань книги из store”