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

function postBill(body, token) {
    const auth = {};
    auth.headers = {};
    auth.headers.Authorization = "Bearer " + token;
  
    const promise = axios.post(`${BASE_URL}/bill`, body, auth);
    return promise;
}

function getRecords(token) {
    const auth = {};
    auth.headers = {};
    auth.headers.Authorization = "Bearer " + token;

    const promise = axios.get(`${BASE_URL}/records`, auth);
    return promise;
}

export { postSignup, postLogin, postBill, getRecords };