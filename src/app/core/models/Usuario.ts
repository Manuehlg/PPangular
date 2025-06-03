export class Usuario {
  constructor(
    public id: number,
    public email: string,
    public password?: string
  ) {}

  static fromJson(json: any): Usuario {
    return new Usuario(json.id, json.email, json.password);
  }
}
