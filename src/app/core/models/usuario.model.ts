export class Usuario {
  constructor(
    public id_usuario: number,
    public nombre: string,
    public apellido: string,
    public correo: string,
    public direccion: string,
    public metodo_pago: string
  ) {}
}