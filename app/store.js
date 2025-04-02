import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Todoslices/todoSlilce";

export const store = configureStore({
    reducer: todoReducer
})