import axios, { AxiosError, type AxiosResponse } from 'axios'
import type { HttpClient } from './http'

export class AxiosAdapter implements HttpClient {
  private http: any
  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL
    })
    this.addInterceptor()
  }

  private addInterceptor() {
    this.http.interceptors.request.use(
      (config: any) => {
        if (config) return config
      },
      (error: any) => Promise.reject(error)
    )
    this.http.interceptors.response.use(
      (axiosResponse: AxiosResponse) => axiosResponse,
      (axiosError: AxiosError): any => {
        const request = axiosError.config
        if (axiosError.response) {
          return this.http(request).catch((err: any) => {
            throw new Error(`${err}`)
          })
        }
        return Promise.reject(axiosError)
      }
    )
  }

  async delete(url: string, content: any): Promise<any> {
    return this.http.delete(url, content)
  }
  async get(url: string, config?: any): Promise<any> {
    return this.http.get(url, config)
  }
  async post(url: string, content: any, config?: any): Promise<any> {
    return this.http.post(url, content, config)
  }
  async put(url: string, content: any, config?: any): Promise<any> {
    return this.http.put(url, content, config)
  }
  async patch(url: string, content?: any, config?: any): Promise<any> {
    return this.http.patch(url, content, config)
  }
}
