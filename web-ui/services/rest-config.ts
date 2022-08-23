import axios from "axios";

export const onlineApiUrlBase = "https://qmt.herokuapp.com";
export const wsUrlBase = "wss://qmt.herokuapp.com"
export const localApiUrlBase = "http://localhost:3002";

export const apiUrlBase = onlineApiUrlBase

export const resourcesUrl = apiUrlBase + "/resources";

export const endpoints = {
  localApiUrlBase: localApiUrlBase,
  onlineApiUrlBase: onlineApiUrlBase,
  loginUrl: `${apiUrlBase}/agents`,
  signinUrl: `${onlineApiUrlBase}/users/login`,
  usersUrl: `${apiUrlBase}/users`,
  ticketsUrl: `${apiUrlBase}/tickets`,
  ticketSocketUrl:`${wsUrlBase}/tickets`,
}

export let authenticatedAxiosRequestConfig = (request?: any)  => {
    let token = localStorage.getItem("user") ? `Bearer ${JSON.parse(localStorage.getItem("user")!).token}` : ""
    //let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwc2V1ZG8iOiIrMjI5OTQ4NTE3ODUiLCJzdWIiOjEsImlhdCI6MTY1ODkzMTQ3N30.aHTSGXs9EDzF5UNMjMefbDzKN28IbZuypo6D3UeaI_o"
    return {
        headers: {
            "content-type": "application/json",
            "authorization": token
        }
    }
}

export let axiosRequestConfig = {
  headers: {
      "content-type": "application/json",
      "accept": "application/json",
  }
}

export const httpClient = axios
