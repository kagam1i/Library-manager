import { createSlice } from "@reduxjs/toolkit";


// Теория по createSlice: 
// Redux хранит данные в одном месте.
// Мы создаём "slice" = кусок общего состояния.
// Здесь будет всё, что относится к книгам. 



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
        }

    }
});

// Экспортируем action — команду положить книги в store
export const { setBooksFromApp } = booksSlice.actions;

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