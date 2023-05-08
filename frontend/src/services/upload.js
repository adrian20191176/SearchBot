import axiosClient from "./client";

const BASE_URL = "http://localhost:5000"

export function uploadPDF(file){
    const formData = new FormData();
    formData.append('file', file);
  
    console.log(BASE_URL)
    return axiosClient.post(BASE_URL+'/upload',formData, {headers: {
        'Content-Type': 'multipart/form-data'
      }});
}
