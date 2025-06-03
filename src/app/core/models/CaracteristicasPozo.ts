export class CaracteristicasPozo {
  constructor(
    public id: number,
    public fechaMedicion: Date,
    public nivelIncialAgua: number,
    public calidadInicialAgua: string,
    public observaciones: string
  ) {}

  static fromJson(json: any): CaracteristicasPozo {
    return new CaracteristicasPozo(
      json.id,
      new Date(json.fechaMedicion),
      json.nivelIncialAgua,
      json.calidadInicialAgua,
      json.observaciones
    );
  }
}
