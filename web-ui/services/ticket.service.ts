import { endpoints, httpClient, authenticatedAxiosRequestConfig } from "./rest-config";

export class TicketService {

  requestConfigs = authenticatedAxiosRequestConfig()

  async getAllAvailable(requestConfigs?: any) {
    let operationUrl = `${endpoints.ticketsUrl}`;
    try {
      let requestResponse = await httpClient.get<any[]>(operationUrl, this.requestConfigs)
      return requestResponse
    } catch (error) {
      throw error
    }
  }

  async update(data: any, id?: number) {
    let operationUrl = `${endpoints.ticketsUrl}`;
    try {
      let requestResponse = await httpClient.put<any[]>(operationUrl, data, this.requestConfigs)
      return requestResponse
    } catch (error) {
      throw error
    }
  }

  async create(data: any, id: number) {
    let operationUrl = `${endpoints.ticketsUrl}/${id}`;
    try {
      let requestResponse = await httpClient.post<any[]>(operationUrl, data, this.requestConfigs)
      return requestResponse
    } catch (error) {
      throw error
    }
  }

  async delete(data: any, id: number) {
    let operationUrl = `${endpoints.ticketsUrl}/${id}`;
    try {
      let requestResponse = await httpClient.delete<any[]>(operationUrl, this.requestConfigs)
      return requestResponse
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}

export let ticketService = new TicketService();
