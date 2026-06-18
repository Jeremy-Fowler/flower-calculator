export class BackgroundImage {
  private _portraitID: string
  private _landscapeID: string
  constructor(portraitID: string, landscapeID: string = portraitID) {
    this._portraitID = portraitID
    this._landscapeID = landscapeID
  }
  get portrait() {
    return this._generateURLs(this._portraitID)
  }
  get landscape() {
    return this._generateURLs(this._landscapeID)
  }

  private _generateURLs(id: string) {
    return `url(https://images.unsplash.com/photo-${id}), url(https://images.unsplash.com/photo-${id}?q=25&w=540), url(https://images.unsplash.com/photo-${id}?q=5&w=100)`
  }

}
