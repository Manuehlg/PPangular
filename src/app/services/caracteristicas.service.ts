import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaracteristicasPozo } from '../core/models/CaracteristicasPozo'; // Asegúrate de tener el modelo adecuado
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CaracteristicasService {

  private apiUrl = 'http://localhost:8080/caracteristicas'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) {}

  getCaracteristicas(): Observable<CaracteristicasPozo[]> {
    return this.http.get<CaracteristicasPozo[]>(this.apiUrl)
      .pipe(map(data => data.map(CaracteristicasPozo.fromJson)));
  }

  getCaracteristicaById(id: number): Observable<CaracteristicasPozo | undefined> {
    return this.http.get<CaracteristicasPozo>(`${this.apiUrl}/${id}`).pipe(
      map(json => CaracteristicasPozo.fromJson(json))
    );
  }

  addCaracteristica(caracteristica: CaracteristicasPozo): Observable<CaracteristicasPozo> {
    return this.http.post<CaracteristicasPozo>(this.apiUrl, caracteristica).pipe(
      map(CaracteristicasPozo.fromJson)
    );
  }

  deleteCaracteristica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
