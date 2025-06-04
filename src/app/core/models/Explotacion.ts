export class Explotacion {
  constructor(
    public id: number,
    public nombre: string,
    public ubicacion: string,
    public descripcion: string,
    public imagen: string,
    public usuarioId: number
  ) {}

  static fromJson(json: any): Explotacion {
    return new Explotacion(
      json.id,
      json.nombre,
      json.ubicacion,
      json.descripcion,
      json.imagen,
      json.usuarioId
    );
  }
}
