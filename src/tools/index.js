import axios from 'axios';
import { API_URL } from "../constants";

export const request = async ({ url, method, params, headers }) => {
  /* params is body in axios */
  try {
    const fullURL = `${API_URL}${url}`;
    return new Promise((resolve, reject) => {
      // const timeoutId = setTimeout(() => {
      //   reject(new Error("Timeout, Server is not responding"));
      // }, 500000); // After 5 seconds will stop the request

      let modfiedHeaders = {
        ...headers,
        // TODO: Add Authorization
      }
      axios[method](fullURL,
        method !== 'get' ? params : {headers: modfiedHeaders},
        {headers: modfiedHeaders})
        .then(res => {
          // clearTimeout(timeoutId);
          resolve(res);
        })
        .catch(error => {
          // clearTimeout(timeoutId);
          /*
          * returning the error status code
          * and show an error message depending on code.
          */
          reject(error?.response?.status)
        }
      )
    })
  } catch (error) {
    console.war(error);
  }
}