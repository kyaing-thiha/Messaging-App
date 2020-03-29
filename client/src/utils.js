const axios = require('axios')

const serverPort = process.env.REACT_APP_SERVER_PORT;
export const serverUrl = "http://"+window.location.hostname+":"+serverPort;

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

export const postURL = async (endPoint, options) => {
    try{
        const url = serverUrl+"/"+endPoint;
        const response = await axios.post(url, options);
        return response.data;
    }
    catch(error){
        throw error;
    }
}