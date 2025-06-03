import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mediciones } from '../core/models/Mediciones'; // Asegúrate de tener el modelo adecuado
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MedicionesService {

  private apiUrl = 'http://localhost:8080/mediciones'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) {}

  getMediciones(): Observable<Mediciones[]> {
    return this.http.get<Mediciones[]>(this.apiUrl)
      .pipe(map(data => data.map(Mediciones.fromJson)));
  }

  getMedicionById(id: number): Observable<Mediciones | undefined> {
    return this.http.get<Mediciones>(`${this.apiUrl}/${id}`).pipe(
      map(json => Mediciones.fromJson(json))
    );
  }

  addMedicion(medicion: Mediciones): Observable<Mediciones> {
    return this.http.post<Mediciones>(this.apiUrl, medicion).pipe(
      map(Mediciones.fromJson)
    );
  }

  deleteMedicion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
