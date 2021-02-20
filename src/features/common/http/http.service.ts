import { configuration } from "../config/configuration";

export class HttpService {
  post<T, D>(url: string, data: D): Promise<T> {
    return fetch(`${configuration.backendHost}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status >= 400) {
        // Return the known error for future handling
        throw new Error();
      }
      return response.json();
    });
  }
}

export const httpService = new HttpService();
