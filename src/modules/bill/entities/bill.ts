import { Location } from '@/modules/entities/location'

export class Bill {
  public id: string
  public uc: number
  public holder: string
  public location: Location
  public amount: number
  public tariff: number
  public consumption: number

  constructor(data: any = {}) {
    this.id = data.id
    this.uc = data.uc
    this.holder = data.holder
    this.location = data.location ? new Location(data.location) : new Location()
    this.amount = data.amount
    this.tariff = data.tariff
    this.consumption = data.consumption
  }

  format() {
    return {
      id: this.id,
      uc: this.uc,
      holder: this.holder,
      location: this.location,
      amount: this.amount,
      tariff: this.tariff,
      consumption: this.consumption
    }
  }
}
