import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1";

export const getCats = (page = 1) => {
    const url = `${API_URL}/images/search?limit=10&page=${page}`;

    return axios.get(url);
};

export const getCatsByCategories = ({ page = 1, id }) => {
    const url = `${API_URL}/images/search?limit=10&page=${page}&category_ids=${id}`;
    return axios.get(url);
};

export const getCategories = () => {
    const url = `${API_URL}/categories`;
    return axios.get(url);
};