import React from 'react'


const parseJwt = token => {
    try {
        return JSON.parse(window.atob(token.split('.')[1]));
        // return true;
    } catch (e) {
        return null;
    }
}

const isTokenExpired = (token) => {
    const decodeJwt = parseJwt(token);
    if (decodeJwt.exp * 1000 < Date.now()) {
        return true;
    }
    return false;
}

export default isTokenExpired