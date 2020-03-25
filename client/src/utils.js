const axios = require('axios')

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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc5ZDk5NzExODc3YWY1MWUxZTNlMjciLCJuYW1lIjoibWluaW9uMyIsImlhdCI6MTU4NTEyMjY3MywiZXhwIjoxNTg1MTI2MjczfQ.vrJ13MVmJdePgrxHjikCQ555X8yX3BXw5XbZqpiqGvg"

export const postURL = async (url, options) => {
    try{
        const response = await axios.post(url, options);
        return response.data;
    }
    catch(error){
        throw error;
    }
}