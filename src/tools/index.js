import axios from 'axios';
import { API_URL } from "../constants";

export const request = ({
  url,
  method,
  params, // This is body in axios
  headers,
}) => {
  try {
    const fullURL = `${API_URL}${url}`;
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("Timeout, Server is not responding"));
      }, 5000); // After 10 seconds will stop the request

      let modfiedHeaders = {
        ...headers,
        // TODO: Add Authorization
      }
      axios[method](fullURL,
        method !== 'get' ? params : {headers: modfiedHeaders},
        {headers: modfiedHeaders})
        .then(res => {
          clearTimeout(timeoutId);
          resolve(res);
        })
        .catch(error => {
          console.log(error.response)
          clearTimeout(timeoutId);
          reject(error)
        })
    })
  } catch (error) {
    console.war(error);
  }
}