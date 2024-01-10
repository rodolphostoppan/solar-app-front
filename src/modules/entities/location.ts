export class Location {
  public state: string
  public city: string
  public address: string

  constructor(data: any = {}) {
    this.state = data.state
    this.city = data.city
    this.address = data.address
  }
}
