import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todosSlice } from "../features/todoSlice";
import { loggedInSlice } from "../features/loggedInSlice";


export default configureStore({
    reducer: {
        todos: todosSlice.reducer,
        loggedIn: loggedInSlice.reducer
    }
});