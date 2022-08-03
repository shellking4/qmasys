import { endpoints, httpClient, axiosRequestConfig } from "./rest-config";

export class AuthService {
  async authenticate(agentId?: number, data?: any, requestConfigs?: any) {
    let operationUrl = agentId ? `${endpoints.loginUrl}/${agentId}` : `${endpoints.signinUrl}`;
    try {
      let requestResponse = await httpClient.post<any[]>(
        operationUrl,
        JSON.stringify(data),
        axiosRequestConfig
      );
      return requestResponse;
    } catch (error) {
      throw error;
    }
  }
}

export let authService = new AuthService();
