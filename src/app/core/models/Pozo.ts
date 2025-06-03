import { Explotacion } from './Explotacion';
import { Mediciones } from './Mediciones';
import { CaracteristicasPozo } from './CaracteristicasPozo';

export class Pozo {
  constructor(
    public id: number,
    public nombre: string,
    public descripcion: string,
    public ubicacion: string,
    public tipoPozo: string,
    public imagen: string,
    public caracteristicas: string,
    public explotacion: Explotacion,
    public caracteristicasPozo?: CaracteristicasPozo,
    public mediciones: Mediciones[] = []
  ) {}

  static fromJson(json: any): Pozo {
    return new Pozo(
      json.id,
      json.nombre,
      json.descripcion || '',
      json.ubicacion || '',
      json.tipoPozo || '',
      json.imagen || '',
      json.caracteristicas || '',
      Explotacion.fromJson(json.explotacion),
      json.caracteristicasPozo ? CaracteristicasPozo.fromJson(json.caracteristicasPozo) : undefined,
      json.mediciones ? json.mediciones.map((m: any) => Mediciones.fromJson(m)) : []
    );
  }
}