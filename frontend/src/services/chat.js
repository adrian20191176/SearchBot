import axiosClient from "./client";

const BASE_URL = "http://localhost:5000"

export function getChat(){
    console.log(BASE_URL)
    return axiosClient.get(BASE_URL+'/');
}
