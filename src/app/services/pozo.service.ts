import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pozo } from '../core/models/pozo.model'; // Asegúrate de tener el modelo adecuado
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PozosService {

  private apiUrl = 'http://localhost:8080/pozos'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) {}

  getPozos(): Observable<Pozo[]> {
    return this.http.get<Pozo[]>(this.apiUrl)
      .pipe(map(data => data.map(Pozo.fromJson)));
  }

  getPozoById(id: number): Observable<Pozo | undefined> {
    return this.http.get<Pozo>(`${this.apiUrl}/${id}`).pipe(
      map(json => Pozo.fromJson(json))
    );
  }

  addPozo(pozo: Pozo): Observable<Pozo> {
    return this.http.post<Pozo>(this.apiUrl, pozo).pipe(
      map(Pozo.fromJson)
    );
  }

  deletePozo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
