import { HttpAdapter as IHttpAdapter } from "@/interfaces/http-adaptern.interface";

export class HttpAdapter implements IHttpAdapter {
  private readonly baseUrl: string;
  private readonly http: typeof fetch;

  constructor(baseUrl: string, httpClient: typeof fetch = fetch) {
    this.baseUrl = baseUrl;
    this.http = httpClient;
  }

  async post<T>(path: string, body: object, options?: object): Promise<T> {
    try {
      const response = await this.http(`${this.baseUrl}${path}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });
      return response.json();
    } catch (error: unknown) {
      throw new Error("Error al realizar la petición POST", { cause: error });
    }
  }
  async put<T>(path: string, body: object, options?: object): Promise<T> {
    try {
      const response = await this.http(`${this.baseUrl}${path}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });
      return response.json();
    } catch (error: unknown) {
      throw new Error("Error al realizar la petición PUT", { cause: error });
    }
  }
  async delete<T>(path: string, options?: object): Promise<T> {
    try {
      const response = await this.http(`${this.baseUrl}${path}`, {
        method: "DELETE",
        ...options,
      });
      return response.json();
    } catch (error: unknown) {
      throw new Error("Error al realizar la petición DELETE", { cause: error });
    }
  }
  async get<T>(path: string): Promise<T> {
    try {
      const response = await this.http(`${this.baseUrl}${path}`);
      return response.json();
    } catch (error: unknown) {
      throw new Error("Error al realizar la petición GET", { cause: error });
    }
  }
}
