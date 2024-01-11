import type { Bill } from '@/modules/bill/entities/bill'
import { Client } from '@/modules/client/entities/client'
import { Location } from '@/modules/entities/location'
import { MonthGeneration } from './monthGeneration'

export class Project {
  public id: string
  public client: Client
  public bills: Array<Bill>
  public location: Location
  public ground: boolean
  public power: number
  public modules: number
  public modulesPower: number
  public inverter: number
  public generation: number
  public monthGeneration: MonthGeneration

  constructor(data: any = {}) {
    this.id = data.id
    this.client = new Client()
    this.bills = new Array<Bill>()
    this.location = new Location()
    this.ground = data.ground
    this.power = data.power
    this.modules = data.modules
    this.modulesPower = data.modulesPower
    this.inverter = data.inverter
    this.generation = data.generation
    this.monthGeneration = new MonthGeneration()
  }

  format() {
    return {
      id: this.id,
      client: this.client,
      bills: this.bills,
      location: this.location,
      ground: this.ground,
      power: this.power,
      modules: this.modules,
      modulesPower: this.modulesPower,
      inverter: this.inverter,
      generation: this.generation,
      monthGeneration: this.monthGeneration
    }
  }
}
