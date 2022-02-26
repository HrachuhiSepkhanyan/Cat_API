import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1";

export const getCats = () => {
    const url = `${API_URL}/images/search?limit=10&page=${1}`;

    return axios.get(url);
};

export const getCatsByCategories = ({ id }) => {
    const url = `${API_URL}/images/search?limit=10&page=${1}&category_ids=${id}`;
    return axios.get(url);
};

export const getCategories = () => {
    const url = `${API_URL}/categories`;
    return axios.get(url);
};