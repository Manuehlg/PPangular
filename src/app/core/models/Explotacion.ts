export class Explotacion {
  constructor(
    public id: number,
    public name: string,
    public city: string,
    public provincia: string,
    public image: string,
    public numpozos: number
  ) {}

  static fromJson(json: any): Explotacion {
    return new Explotacion(
      json.id,
      json.name,
      json.city,
      json.provincia,
      json.image,
      json.numpozos
    );
  }
}
