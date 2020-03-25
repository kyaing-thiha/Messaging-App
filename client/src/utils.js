const axios = require("axios");

export const filterArrayBasedOnInputString = (array, input, key) => {
    return array.filter((item) => {
        const inputUpperCase = input.toUpperCase();
        const itemFieldUpperCase = item[`${key}`].toUpperCase();
        return (itemFieldUpperCase.includes(inputUpperCase));
    })
}

export const fetchURL = async(url) => {
    try{
        const fetchResponse = await fetch(url);
        const responseJSON = await fetchResponse.json();
        return responseJSON;
    }
    catch(error){
        throw error;
    }
}

export const postURL = async(url, options) => {
    try{
        const returnJSON = axios.post(url, options);
        return returnJSON;
    }
    catch(error){
        throw error;
    }
}