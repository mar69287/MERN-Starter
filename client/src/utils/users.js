import sendRequest from './send-request'
const BASE_URL = 'http://localhost:8080/api/v1/users';

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}