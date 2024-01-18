import { Location } from '@/modules/entities/location'

export class Client {
  public id: string
  public name: string
  public location: Location

  constructor(data: any = {}) {
    this.id = data.id
    this.name = data.name
    this.location = data.location ? new Location(data.location) : new Location()
  }

  format() {
    return {
      id: this.id,
      name: this.name,
      location: this.location
    }
  }
}
