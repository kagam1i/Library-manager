import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/bookSlice.js";

// store.js в данном проекте - общий “шкаф” для всего состояния приложения


// Store = главный контейнер состояния.
// Внутри него будет несколько slice-ов:
// 1.books
// 2.auth 

export const store = configureStore({
    reducer: {
        books: booksReducer, // Полка “books” обслуживается booksReducer-ом
    }
});


// Обобщение:
// configureStore собирает все “полки” в один “шкаф”
// books: booksReducer означает: state.books управляется reducer-ом из booksSlice