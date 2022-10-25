import { endpoints, httpClient, axiosRequestConfig, authenticatedAxiosRequestConfig } from "./rest-config";

export class UserService {

  requestConfigs = authenticatedAxiosRequestConfig()

  async getAll(requestConfigs?: any) {
    let operationUrl = `${endpoints.usersUrl}`;
    try {
      let requestResponse = await httpClient.get<any[]>(operationUrl, this.requestConfigs)
      return requestResponse
    } catch (error) {
      throw error
    }
  }

  async create(data: any) {
    let operationUrl = `${endpoints.usersUrl}`;
    try {
      let requestResponse = await httpClient.post<any[]>(operationUrl, data, this.requestConfigs)
      return requestResponse
    } catch (error) {
      throw error
    }
  }

  async delete(user: any) {
    let operationUrl = `${endpoints.usersUrl}/delete/${user.id}`;
    try {
      let requestResponse = await httpClient.delete<any[]>(operationUrl, this.requestConfigs)
      return requestResponse
    } catch (error) {
      throw error
    }
  }

}

export let userService = new UserService();
