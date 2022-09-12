import axios from 'axios';

const BASE_URL = "http://localhost:5000";

function postSignup(newUserData) {
    const promise = axios.post(`${BASE_URL}/signup`, newUserData);
    return promise;
}

function postLogin(loginUserData) {
    const promise = axios.post(`${BASE_URL}/login`, loginUserData);
    return promise;
}

export { postSignup, postLogin };