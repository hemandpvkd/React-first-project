import axios, { AxiosResponse, AxiosError } from 'axios';

export default function request(type: string, url: string, params?: any): Promise<any> {
  let token = localStorage.getItem('sessiontoken');
  axios.defaults.headers.common['sessiontoken'] = token;

  switch (type) {
    case 'get':
      return axios
        .get(url, { params: { ...params } })
        .then(function (response: AxiosResponse) {
          console.log("Get Response", response);
          return response.data;
        })
        .catch(function (error: AxiosError) {
          console.log("Server Error", error);
          console.log("Server response", error.response);
          return error;
        });

    case 'post':
      return axios
        .post(url, params)
        .then(function (response: AxiosResponse) {
          console.log("Post response", response);
          return response.data;
        })
        .catch(function (error: AxiosError) {
          console.log("Server Error", error);
          console.log("Server response", error.response);
          return error.response?.data;
        });

    case 'put':
      return axios
        .put(url, params)
        .then(function (response: AxiosResponse) {
          console.log("Put response", response);
          return response.data;
        })
        .catch(function (error: AxiosError) {
          console.log("Server Error", error);
          console.log("Server response", error.response);
          return error.response?.data;
        });

    case 'delete':
      return axios
        .delete(url, params)
        .then(function (response: AxiosResponse) {
          console.log("Delete response", response);
          return response.data;
        })
        .catch(function (error: AxiosError) {
          console.log("Server Error", error);
          console.log("Server response", error.response);
          return error.response?.data;
        });

    default:
      throw new Error(`Unsupported request type: ${type}`);
  }
}
