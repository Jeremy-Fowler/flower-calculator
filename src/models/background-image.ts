export class BackgroundImage {
  private _portrait: string
  private _landscape: string
  constructor(portrait: string, landscape: string = portrait) {
    this._portrait = portrait
    this._landscape = landscape
  }
  get portrait() {
    return `url(${this._portrait})`
  }
  get landscape() {
    return `url(${this._landscape})`
  }
  get lowQualityPortrait() {
    return `url(${this._portrait}?q=50&w=540)`
  }
  get lowQualityLandscape() {
    return `url(${this._landscape}?q=50&w=540)`
  }
}
