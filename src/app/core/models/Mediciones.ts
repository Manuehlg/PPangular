import { Pozo } from './Pozo';

export class Mediciones {
  constructor(
    public id: number,
    public fechaMedicion: Date,
    public cantidadAgua: number,
    public calidadAgua: string,
    public nivelAgua: number,
    public pozo: Pozo
  ) {}

  static fromJson(json: any): Mediciones {
    return new Mediciones(
      json.id,
      new Date(json.fechaMedicion),
      json.cantidadAgua,
      json.calidadAgua,
      json.nivelAgua,
      json.pozo ? Pozo.fromJson(json.pozo) : json.pozo
    );
  }
}
