import { API_URL } from 'constants/env'
import request, { RequestOptions, Response } from 'lib/request'


export class Ashios {
  baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }
  async request<T>(url: string, options?: RequestOptions): Promise<Response<T>> {
    const response = await request<T>(url, options)
    return response
  }
}

export default new Ashios(API_URL)
