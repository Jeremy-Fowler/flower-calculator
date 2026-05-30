export class BackgroundImage {
  private _portraitID: string
  private _landscapeID: string
  constructor(portraitID: string, landscapeID: string = portraitID) {
    this._portraitID = portraitID
    this._landscapeID = landscapeID
  }
  get portrait() {
    return `url(https://images.unsplash.com/photo-${this._portraitID}), url(https://images.unsplash.com/photo-${this._portraitID}?q=50&w=540)`
  }
  get landscape() {
    return `url(https://images.unsplash.com/photo-${this._landscapeID}), url(https://images.unsplash.com/photo-${this._landscapeID}?q=50&w=540)`
  }

}
