export class Usuario {
  constructor(
    public id: number,
    public apellido: string,
    public direccion: string,
    public email: string,
    public nombre: string,
    public metodo_pago: string,
    public password?: string
  ) {
  }

  static fromJson(json: any): Usuario {
    return new Usuario(json.id, json.apellido, json.direccion, json.email, json.nombre, json.metodo_pago, json.password);
  }
}
