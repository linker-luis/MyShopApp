import axios from "axios";

// const baseurl = 'http://127.0.0.1:8000/'
const baseurl = 'https://myfakeapibackend.herokuapp.com/'


const instance = axios.create({
    baseURL: baseurl,
})

export { instance }