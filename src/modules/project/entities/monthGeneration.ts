export class MonthGeneration {
  public jan: number
  public feb: number
  public mar: number
  public apr: number
  public may: number
  public jun: number
  public jul: number
  public aug: number
  public sep: number
  public oct: number
  public nov: number
  public dec: number

  constructor(data: any = {}) {
    this.jan = data.jan
    this.feb = data.feb
    this.mar = data.mar
    this.apr = data.apr
    this.may = data.may
    this.jun = data.jun
    this.jul = data.jul
    this.aug = data.aug
    this.sep = data.sep
    this.oct = data.oct
    this.nov = data.nov
    this.dec = data.dec
  }
}
