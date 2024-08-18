import axios from "axios";

export const cocktailFetch = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1"
})
