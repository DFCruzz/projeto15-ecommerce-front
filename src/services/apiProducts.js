import axios from "axios";

const REACT_APP_API_URL = "http://localhost:5008";

function getProductsList() {
    const promise = axios.get(`${REACT_APP_API_URL}/products`)
    return promise
}

function getSliderList() {
    const promise = axios.get(`${REACT_APP_API_URL}/slider`)
    return promise
}

function getProductsType(type) {
    const promise = axios.get(`${REACT_APP_API_URL}/products/${type}`)
    return promise
}

function getProduct(id) {
    const promise = axios.get(`${REACT_APP_API_URL}/product/${id}`)
    return promise
}


const apiProducts = { getProductsList, getProductsType, getProduct, getSliderList }
export default apiProducts