// authSlice.js отвечает за состояние авторизации пользователя
import { createSlice } from "@reduxjs/toolkit";
import { loadUser } from "../shared/storage/authStorage";

const initialState = {
    user: loadUser(), // Загружаем пользователя из LocalStorage при инициализации состояния
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn(state, action) {
            state.user = action.payload; // Устанавливаем пользователя при логине
        },
        signUp(state, action) {
            state.user = action.payload; // Очищаем пользователя при логауте
        },
        signOut(state) {
            state.user = null;
        },
    },
});


export const { signIn, signUp, signOut } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
export const selectIsAuth = (state) => Boolean(state.auth.user);

// Обобщение:
// createSlice упрощает создание Redux-слайсов
// authSlice управляет состоянием авторизации пользователя (user)
// signIn, signUp, signOut - действия для изменения состояния user