import type { App } from 'vue'
import { HTTP_CLIENT, type HttpClient } from '../http/http'
import { AxiosAdapter } from '../http/axios-adapter'

export class DependencyInjection {
  constructor(private readonly applicationVue: App<Element>) {}

  async execute() {
    const httpService: HttpClient = new AxiosAdapter()

    this.applicationVue.provide(HTTP_CLIENT, httpService)
  }
}
