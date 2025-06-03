export class Usuario {
  constructor(
    public id: number,
    public apellido: string,
    public direccion: string,
    public email: string,
    public password?: string,
    public nombre: string,
    public metodo_pago: string
  ) {}

  static fromJson(json: any): Usuario {
    return new Usuario(json.id, json.apellido, json.direccion, json.email, json.password, json.nombre, json.metodo_pago);
  }
}
