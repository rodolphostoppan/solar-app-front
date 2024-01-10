import type { HttpClient } from '@/infra/http/http'
import { Bill } from '../entities/bill'

export class BillService {
  constructor(private readonly httpClient: HttpClient) {}
  save(bill: Bill) {
    const payload = bill.format()
    return this.httpClient.post('/bills', payload)
  }

  edit(bill: Bill) {
    const payload = bill.format()
    return this.httpClient.put(`/bills/${bill.id}`, payload)
  }

  delete(id: string) {
    return this.httpClient.delete(`/bills/${id}`, null)
  }

  getBillById(id: string): Promise<Bill> {
    return this.httpClient.get(`/bills/${id}`).then(({ data }) => {
      return new Bill(data)
    })
  }

  getAllBills(): Promise<Bill[]> {
    return this.httpClient.get(`/bills`).then(({ data }) => {
      return data.map((client: any) => new Bill(client))
    })
  }
}
