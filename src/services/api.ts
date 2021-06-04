import axios from "axios";


// apagar antes do commit
export const key = "TOKEN DO .env"; 

//https://api-ssl.bitly.com/v4/shorten
const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers:{
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  }
})

export default api;