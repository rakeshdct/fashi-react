import axios from 'axios'

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"
const API_KEY = "AIzaSyBO-NoCw1HEzs8QrbFFfNeLGxnGEAYUDJk"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const SEND_VERIFICATION_EMAIL = `/accounts:sendOobCode?key=${API_KEY}`
const FORGOT_URL = `/accounts:sendOobCode?key=${API_KEY}`;

export const RegisterApi = (inputs) => {
    let data = { displayName: inputs.displayname, email: inputs.email, password: inputs.password }
    return axios.post(REGISTER_URL, data)
}

export const SendVerificationMail = (inputs) => {
    let data = { idToken: inputs, requestType: "VERIFY_EMAIL" }
    return axios.post(SEND_VERIFICATION_EMAIL, data)
}

export const LoginApi = (inputs) => {
    let data = { email: inputs.email, password: inputs.password }
    return axios.post(LOGIN_URL, data)
}

export const ForgotApi = (inputs) => {
    let data = { email: inputs, requestType: "PASSWORD_RESET" }
    return axios.post(FORGOT_URL, data)
}
