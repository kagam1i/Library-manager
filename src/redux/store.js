import { configureStore } from "@reduxjs/toolkit";
import booksReducer, { selectBooks } from "./booksSlice.js";
import { saveBooks } from "../shared/storage/booksStorage";
import authReducer, {selectUser} from "./authSlice.js";
import {saveUser} from "../shared/storage/authStorage.js";

// store.js в данном проекте - общий “шкаф” для всего состояния приложения


// Store = главный контейнер состояния.
// Внутри него будет несколько slice-ов:
// 1.books
// 2.auth 

export const store = configureStore({
    reducer: {
        books: booksReducer, // Полка “books” обслуживается booksReducer-ом
        auth: authReducer, // Полка "auth" обслуживается authReducer-ом
    },
});

// Подписываемся на изменения в store
store.subscribe(() => {
    // При любом изменении store сохраняем книги в LocalStorage
    const state = store.getState(); // получаем текущее состояние store
    const books = selectBooks(state); // читаем книги из состояния
    saveBooks(books); // сохраняем книги в LocalStorage

    const user = selectUser(state); // читаем пользователя из состояния
    saveUser(user); // сохраняем пользователя в LocalStorage    
});


// Обобщение:
// configureStore собирает все “полки” в один “шкаф”
// books: booksReducer означает: state.books управляется reducer-ом из booksSlice