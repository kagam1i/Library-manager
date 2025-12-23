import { createSlice, nanoid } from "@reduxjs/toolkit";


// Теория по createSlice: 
// Redux хранит данные в одном месте.
// Мы создаём "slice" = кусок общего состояния.
// Здесь будет всё, что относится к книгам. 

// Начальное состояние полки "books"
const initialState = {
    items: [], // Массив книг
}

// booksSlice.js в данном проекте - полка “books” в общем хранилище Redux
const booksSlice = createSlice({
    name: 'books', // Имя слайса
    initialState, // Начальное состояние    
    reducers: {
        // action - “положи массив книг в Redux”
        setBooksFromApp(state, action) {
            state.items = action.payload; // action.payload = массив книг
        },
        // action - "добавь книгу в Redux"
        addBook: {
            reducer(state, action) {
                state.items.unshift(action.payload); // добавляем книгу в начало массива
            },
            // prepare - функция для подготовки данных перед отправкой в reducer
            prepare({ book }) {
                return {
                    payload: {
                        id: nanoid(), // генерируем уникальный id для книги
                        ...book,
                    }
                }
            }
        }
    }
});

// Экспортируем action — команду положить книги в store
export const { setBooksFromApp, addBook } = booksSlice.actions;

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