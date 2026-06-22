export class Flower {
  name: string
  displayPrice: string

  constructor(name: string) {
    this.name = name
    this.displayPrice = ''
  }

  get price() {
    return parseFloat(this.displayPrice)
  }
}
