import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pozo } from '../core/models/pozo.model';

@Injectable({
  providedIn: 'root'
})
export class PozosService {
  private baseUrl = '/api/pozos';

  constructor(private http: HttpClient) { }

  getByExplotacion(explotacionId: number): Observable<Pozo[]> {
    return this.http.get<Pozo[]>(`${this.baseUrl}/explotacion/${explotacionId}`);
  }

  create(pozo: Pozo): Observable<Pozo> {
    return this.http.post<Pozo>(this.baseUrl, pozo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
