import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Explotacion } from '../core/models/Explotacion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ExplotacionesService {

  private apiUrl = 'http://localhost:8080/explotaciones';

  constructor(private http: HttpClient) {}

  getExplotaciones(): Observable<Explotacion[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/1`)
      .pipe(map(data => data.map(Explotacion.fromJson)));
  }

  getExplotacionById(id: number): Observable<Explotacion | undefined> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(json => Explotacion.fromJson(json))
    );
  }

  addExplotacion(explo: Explotacion): Observable<Explotacion> {
    return this.http.post<any>(this.apiUrl, explo).pipe(
      map(Explotacion.fromJson)
    );
  }

  deleteExplotacion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getByUsuario(usuarioId: number): Observable<Explotacion[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/${usuarioId}`)
      .pipe(map(data => data.map(Explotacion.fromJson)));
  }
}
