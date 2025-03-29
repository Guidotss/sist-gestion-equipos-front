export interface HttpAdapter { 
    get<T>(url: string): Promise<T>;
    post<T>(url: string, body: object, options?: object): Promise<T>;
    put<T>(url: string, body: object, options?: object): Promise<T>;
    delete<T>(url: string, options?: object): Promise<T>;
}