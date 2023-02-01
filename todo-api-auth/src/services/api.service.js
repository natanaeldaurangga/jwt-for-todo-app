import axios from "axios"
import { TODO_RESOURCE_URL } from "../constant/constant"
import { setAuthToken } from "../auth"
import { loadTask } from "../features/todoSlice";

// console.log(http);
setAuthToken(localStorage.getItem("jwt-token"))

export function fetchTodosService(dispatch) {
    axios.get(TODO_RESOURCE_URL).then(response => {
        dispatch(loadTask(response.data));
    });
}

export async function addTaskService(payload) {
    return axios.post(TODO_RESOURCE_URL, payload).then(response => {
        return response.data;
    }).catch(err => {
        return err.response;
    })
}

export async function deleteTaskService(secureId) {
    return axios.delete(TODO_RESOURCE_URL + "/" + secureId).then(response => {
        return response;
    }).catch(err => {
        return err.response;
    })
}

export async function checkTaskService(secureId) {
    return axios.put(TODO_RESOURCE_URL + "/check/" + secureId).then(response => {
        return response;
    }).catch(err => {
        return err.response;
    });
}
