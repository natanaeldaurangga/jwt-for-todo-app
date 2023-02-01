import axios from "axios";
import { AUTH_URL, RESOURCE_URL } from "../constant/constant";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import isTokenExpired from "./AuthVerirfy";

export const handleSubmit = async (email, pass) => {
    const loginPayload = {
        email: email,
        password: pass
    };

    let response = await axios.post(AUTH_URL, loginPayload)
        .then(response => {
            return response;
        }).catch(err => {
            return err.response;
        });
        
    return response;
}

export const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = 'Bearer ' + token; 
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}


export const checkUser = () => {
    let flag = false;
    const localToken = localStorage.getItem("jwt-token");
    localToken && !isTokenExpired(localToken) ? flag=true : flag=false;
    return flag;
}

export const logout = () => {
    localStorage.removeItem("jwt-token");
    setAuthToken(false);
}

export default axios;