import { createSlice } from "@reduxjs/toolkit";
import { TODO_RESOURCE_URL } from "../constant/constant";
import axios from "axios";
import { setAuthToken } from "../auth";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [
            {
                "secureId": "poifs98dfslkfau-8",
                "task": "test",
                "isChecked": false
            }
        ]
    },
    // TODO: Lanjut untuk bikin request todonya
    reducers: {
        loadTask: (state, action) => {
            // TODO: Lanjut untuk bikin request todonya
            state.value = action.payload;
        },
        addTask: (state, action) => {
            let len = state.value.length;
            let lastId = state.value.length ? state.value[len - 1].id : 1;

            state.value.push({
                id: lastId + 1,
                task: action.payload,
                isChecked: false
            });
        },
        deleteTask: (state, action) => {
            let temp = state.value.filter(todo => todo.id !== action.payload);
            // console.log(temp);
            state.value = temp;
        },
        checkTask: (state, action) => {
            const todo = state.value.find(todo => todo.id === action.payload);
            // console.log(todo.id);
            todo.isChecked = !todo.isChecked;
        },
    },

});

export const { addTask, deleteTask, checkTask, loadTask } = todosSlice.actions;
