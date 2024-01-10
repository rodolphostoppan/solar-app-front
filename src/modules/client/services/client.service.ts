import type { HttpClient } from '@/infra/http/http'
import { Client } from '../entities/client'

export class ClientService {
  constructor(private readonly httpClient: HttpClient) {}
  save(client: Client) {
    const payload = client.format()
    return this.httpClient.post('/clients', payload)
  }

  edit(client: Client) {
    const payload = client.format()
    return this.httpClient.put(`/clients/${client.id}`, payload)
  }

  delete(id: string) {
    return this.httpClient.delete(`/clients/${id}`, null)
  }

  getClientById(id: string): Promise<Client> {
    return this.httpClient.get(`/clients/${id}`).then(({ data }) => {
      return new Client(data)
    })
  }

  getAllClients(): Promise<Client[]> {
    return this.httpClient.get(`/clients`).then(({ data }) => {
      return data.map((client: any) => new Client(client))
    })
  }
}
