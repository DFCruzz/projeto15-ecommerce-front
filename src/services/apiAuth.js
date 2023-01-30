import axios from "axios"

function singIn(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body)
    return promise
}

function signUp(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
    return promise
}

const apiAuth = { singIn, signUp } 
export default apiAuth